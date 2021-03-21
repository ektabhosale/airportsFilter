import "./App.css";
import { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import airports from "./data/airports.json";
import paginationFactory from "react-bootstrap-table2-paginator";
import CheckBoxFilter from "./components/CheckBoxFilter";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [dataCol, setDataCol] = useState(airports);
  const airports_all_data = airports;
  const selected_types = [];
  const searchName = (e) => {
    debugger;
    let val = e.target.value;
    if (val) {
      setSearchValue(e.target.value);

      let temp = dataCol.filter((item) =>
        item.name.toLowerCase().match(e.target.value)
      );
      setDataCol(temp);
    } else {
      setDataCol(airports);

      setSearchValue("");
    }
  };

  const handleClick = (e, checked) => {
    debugger;
    setDataCol(airports_all_data);
    if (checked) {
      selected_types.push(e);
    } else {
      selected_types.pop(e);
    }
    if (selected_types.length > 0) {
      let temp1 = [];
      let temp2 = [];
      selected_types.forEach((element) => {
        temp1 = dataCol.filter((item) => {
          return item.type == element;
        });
        temp2 = temp2.concat(temp1);
      });
      setDataCol(temp2);
    } else {
      setDataCol(airports);
    }
  };
  const columns = [
    {
      dataField: "name",
      text: "Name",
    },
    {
      dataField: "icao",
      text: "ICAO",
    },
    {
      dataField: "iata",
      text: "IATA",
    },
    {
      dataField: "iata",
      text: "IATA",
    },
    {
      dataField: "elevation",
      text: "Elev.",
    },
    {
      dataField: "latitude",
      text: "Lat.",
    },
    {
      dataField: "longitude",
      text: "Long.",
    },
    {
      dataField: "type",
      text: "Type",
    },
  ];
  const labels = [
    "small",
    "medium",
    "large",
    "heliport",
    "closed",
    "In your favourites",
  ];

  return (
    <div class="App">
      <h1 align="left" style={{ color: "grey", fontWeight: "bold" }}>
        Filter Airports Tasks
      </h1>
      <div class="tableSquare">
        <h2 align="left">Filter airports</h2>
        <div align="left">
          {labels.map((item, i) => {
            return (
              <span>
                <CheckBoxFilter
                  labelName={item}
                  handleClick={(e, checked) => handleClick(e, checked)}
                />
              </span>
            );
          })}
        </div>

        <div align="right">
          <label
            style={{
              margin: "auto",
              padding: "10px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Filter By Search
          </label>
          <br />
          <input
            value={searchValue}
            placeholder="Search airport names "
            type="text"
            onChange={(e) => {
              searchName(e);
            }}
          />

          <BootstrapTable
            keyField="id"
            data={dataCol}
            columns={columns}
            striped
            pagination={paginationFactory()}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
