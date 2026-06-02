import { render, screen } from "@testing-library/react";
import App from "../src/App";
import React from "react";
import { test, expect } from "vitest";
test("renders dashboard",()=>{render(<App/>);expect(screen.getByText(/Data Quality Dashboard/i)).toBeTruthy();});