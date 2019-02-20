import React from "react";
import ReactDOM from "react-dom";
import { AkitaApp } from "./akita/AkitaApp";
import { MobxApp } from "./mst/MobxApp";

var mountNode = document.getElementById("app");
ReactDOM.render(<MobxApp />, mountNode);
