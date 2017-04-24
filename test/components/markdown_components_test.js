import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";
import { Provider } from "react-redux"

import MarkdownComponents from "../../app/scripts/components/editor_components/markdown_components.js";

// How to test components using Redux:
// http://www.wsbrunson.com/react/redux/test/2016/05/08/testing-redux-containers.html

const createFakeStore = (state) => {
	return {
		default: () => {},
		subscribe: () => {},
		dispatch: () => {},
		getState: () => {
			return Object.assign({}, state);
		}
	};
};

describe("Markdown Components", () => {
	const store = createFakeStore({
		markdownPreview: 'Haha',
		markdownNotes: '',
		showConfirmationMessage: false
	});

	let Component;

	beforeEach(() => {
		Component = render(<Provider store={store}><MarkdownComponents /></Provider>);
	});

  it("should have a title", () => {
    expect(Component.text()).toContain("Moleskin");
  });

	it("should populate preview", () => {
		expect(Component.find('.textarea').text()).toContain("Haha");
	});
});
