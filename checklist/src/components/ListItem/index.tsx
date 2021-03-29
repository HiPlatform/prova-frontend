import React, { useEffect, useState } from "react";
import { ExpandMore } from "@material-ui/icons";
import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";

import { List } from "../";

import "./styles.sass";

const ListItem = ({ item, children, checked }: any): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  const [itemChecked, setItemChecked] = useState(false);

  const toggleExpand = () => setExpanded((val) => !val);
  const toggleChecked = () => setItemChecked((val) => !val);

  useEffect(() => {
    const expandedNodes =
      JSON.parse(localStorage.getItem("expanded") || "[]") || [];

    expandedNodes.map((node: any) => {
      if (node === item.id) {
        setExpanded(true);
      }

      return node;
    });
  }, [item]);

  useEffect(() => {
    let expandedNodes =
      JSON.parse(localStorage.getItem("expanded") || "[]") || [];

    if (expanded) {
      localStorage.setItem(
        "expanded",
        JSON.stringify([...expandedNodes, item.id])
      );
    } else {
      const items = expandedNodes.filter((id: any) => id !== item.id);
      localStorage.setItem("expanded", JSON.stringify(items));
    }
  }, [expanded, item]);

  useEffect(() => {
    if (checked) {
      setItemChecked(checked);
    } else {
      const checkedNodes =
        JSON.parse(localStorage.getItem("checkeds") || "[]") || [];

      checkedNodes.map((node: any) => {
        if (node === item.id) {
          setItemChecked(true);
        }

        return node;
      });
    }
  }, [checked, item]);

  useEffect(() => {
    let checkedNodes =
      JSON.parse(localStorage.getItem("checkeds") || "[]") || [];

    if (itemChecked) {
      localStorage.setItem(
        "checkeds",
        JSON.stringify([...checkedNodes, item.id])
      );
    } else {
      const items = checkedNodes.filter((id: any) => id !== item.id);
      localStorage.setItem("checkeds", JSON.stringify(items));
    }
  }, [itemChecked, item]);

  return (
    <div className="item">
      <FormGroup className="form-group" row>
        <FormControlLabel
          control={
            <Checkbox
              checked={itemChecked}
              color="primary"
              onClick={toggleChecked}
            />
          }
          label={item.name}
        />
        {children.length > 0 ? (
          <ExpandMore
            className={`icon ${expanded ? "expanded" : ""}`}
            onClick={toggleExpand}
          />
        ) : null}
      </FormGroup>

      {expanded ? (
        <div className="children">
          <List node={children} checked={itemChecked}></List>
        </div>
      ) : null}
    </div>
  );
};

export default ListItem;
