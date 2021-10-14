import App from "./App";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let renderApp = () => render(<App />);

const NUM_STAGES = 4;

const testIds = {
  createTaskInput: "new-task-name-input",
  createTaskButton: "create-task-btn",
  selectedTaskField: "selected-task-field",
  moveBackBtn: "move-back-btn",
  moveForwardBtn: "move-forward-btn",
  deleteBtn: "delete-btn",
  stages: ["stage-0", "stage-1", "stage-2", "stage-3"],
};

const stageNames = ["New", "Active", "Resolved", "Closed"];

const taskNameToId = (name) => {
  return `task-${name.split(" ").join("-")}`;
};

const predefinedTasks = {
  0: ["task 0", "task 1", "task 2", "task 3"],
  1: ["task 4", "task 5", "task 6"],
  2: ["task 7", "task 8"],
  3: ["task 9"],
};

beforeEach(() => {
  renderApp = () => render(<App />);
});

afterEach(() => {
  cleanup();
});

test("Clicking on any card should display the name in textbox", () => {
  const {
    getByText,
    getByTestId,
    queryByText,
    queryByTestId,
    container,
    asFragment,
  } = renderApp();

  const selectedTaskField = getByTestId(testIds.selectedTaskField);
  expect(selectedTaskField).toBeVisible();
  //expect(selectedTaskField).toHaveValue("");

  // populate new task field with task 1
  const createTaskInput = getByTestId(testIds.createTaskInput); 
  fireEvent.change(createTaskInput, { target: { value: "task 1" } });
  // create new task 
  const createButton = getByTestId('create-button');
  fireEvent.click(createButton);

  const task = getByTestId(taskNameToId("task 1"));
  fireEvent.click(task);

  expect(selectedTaskField).toHaveValue("task 1");
});
