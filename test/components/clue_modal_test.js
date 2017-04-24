import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";
import { Provider } from "react-redux";

import ClueModal from "../../app/scripts/components/jeopardy_components/clue_modal.js";

const createFakeStore = state => {
  return {
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => {
      return Object.assign({}, state);
    }
  };
};

describe("Clue Modal", () => {
  const store = createFakeStore({
    showModal: true
  });

  let Component;

  beforeEach(() => {
    let fakeClue = { question: 'boogers' };
    Component = render(
      <Provider store={store}>
        <ClueModal clue={fakeClue}/>
      </Provider>
    );
  });

  it("should show modal", () => {
    expect(Component.find(".jeopardy-modal-title").text()).toContain('boogers');
  });
});
