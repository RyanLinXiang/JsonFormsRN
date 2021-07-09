import { Categorization, Category, LayoutProps } from "@jsonforms/core";
import { RendererComponent, withJsonFormsLayoutProps } from "@jsonforms/react";
import React from "react";
import { SingleCategory } from "./SingleCategory";
import { isCategorization } from "./tester";

export interface CategorizationState {
    selectedCategory: Category;
    currentPage: number;
}

class CategorizationRenderer extends RendererComponent<
    LayoutProps,
    CategorizationState
> {
    categorization: Categorization;

    constructor(props) {
        super(props);

        this.categorization = this.props.uischema as Categorization;
        this.state = {
            selectedCategory: this.findCategory(
                this.categorization as Categorization,
            ),
            currentPage: 0,
        };
    }

    render() {
        const { selectedCategory } = this.state;

        return (
            <SingleCategory
                category={selectedCategory}
                schema={this.props.schema}
                path={this.props.path}
            />
        );
    }

    private findCategory(categorization: Categorization): Category {
        const category = categorization.elements[0];

        if (this.state?.selectedCategory) {
            return this.state.selectedCategory as Category;
        }

        if (isCategorization(category)) {
            return this.findCategory(category);
        }

        return category;
    }
}

export default withJsonFormsLayoutProps(CategorizationRenderer);
