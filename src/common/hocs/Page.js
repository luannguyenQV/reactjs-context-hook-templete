import React from "react";
import Header from "../elements/Header"

export default function PageContainer(props) {
  return (
    <div className="todoapp">
      <Header title={props.title} />
      {props.children}
    </div>
  );
}
