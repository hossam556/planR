import React, { useState, useRef, useEffect, useCallback } from "react";
import "./Table.scss";
import { columns } from "../../../utils/tableColumns";
import { staticData } from "../../../utils/tableData";
import { Edit } from "../../../assets/icons/index";

const Table = ({ data, setData, getEditedItem }) => {
  const loadMoreItem = useRef();

  const loadMoreDataHandler = useCallback(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let newData = [...data];

        for (let i = 0; i < staticData.length; i++) {
          newData.push(data[i]);
        }
        setData(newData);
      }
    });
    observer.observe(loadMoreItem.current);
  }, [data]);

  useEffect(() => {
    loadMoreDataHandler();
  }, [loadMoreDataHandler]);

  return (
    <div className="table-wraper">
      <table>
        <tbody>
          <tr>
            {columns.map((col) => (
              <th key={col.id}>{col.name}</th>
            ))}
          </tr>
          {data.map((item, i) => (
            <tr key={i}>
              {columns.map((col) =>
                col.key === "actions" ? (
                  <td key={col.id}>
                    <button
                      className="editBtn"
                      onClick={() => getEditedItem(item, i)}
                    >
                      <Edit />
                    </button>
                  </td>
                ) : (
                  <td key={col.id}>{item[col.key]}</td>
                )
              )}
            </tr>
          ))}
          <tr ref={loadMoreItem}>
            {columns.map((item, i) => (
              <td key={i} className="loadmore-cell"></td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
