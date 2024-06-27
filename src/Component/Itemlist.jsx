import React, { useState } from "react";
import { listData } from "../Data/ListData";
import "./categories.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Itemlist() {
  const [hovered, setHovered] = useState(null);

  const handleMouseOver = (index) => {
    setHovered(index);
  };

  const handleMouseOut = () => {
    setHovered(null);
  };

  return (
    <div className="list_item">
      <div className="list_item_container">
        {listData.map((category, index) => (
          <a
            key={index}
            href={category.href || "#"}
            aria-label={category.label}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                }}
              >
                <img alt={category.label} src={category.src} />
              </div>
              <span>
                <p>{category.label}</p>
                {category.hasList ? (
                  <FontAwesomeIcon icon={faChevronDown} />
                ) : null}
              </span>
              {hovered === index && category.hasList && (
                <ul className="list">
                  {category.list.map((item, idx) => (
                    <li key={idx}>
                      {item.text}
                      {item.subList && (
                        <ul className="sub_list">
                          {item.subList.map((subItem, subIdx) => (
                            <li key={subIdx}>{subItem.text}</li>
                          ))}
                        </ul>
                      )}
                      {idx === 0 ? (
                        <FontAwesomeIcon
                          style={{ marginLeft: "8px" }}
                          icon={faChevronRight}
                          color="blue"
                        />
                      ) : null}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Itemlist;
