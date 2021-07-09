import { JsonForms } from "@jsonforms/react";
import _ from "lodash";
import React from "react";
import { View } from "react-native";
import { RNCells, RNRenderers } from "./jsonforms";

const initialData = {};

interface State {
    data: typeof initialData | any;
    errors: [];
}

export default class App extends React.Component<unknown, State> {
    constructor(props) {
        super(props);
        this.state = { data: {}, errors: [] };
    }

    private onChange({ errors, data }) {
        this.setState({ data, errors });
    }

    private customizer(objValue: string, srcValue: string) {
        if (_.isArray(objValue)) {
            return _.cloneDeep(objValue).concat(_.cloneDeep(srcValue));
        }

        return undefined;
    }

    public render() {
        const schema = _.mergeWith(
            {},
            {
                type: "object",
                properties: {
                    chronic: {
                        title: "chronisch",
                        type: "string",
                        enum: ["ja", "nein"],
                    },
                },
            },
            this.customizer,
        );
        const uiSchemas = [
            {
                type: "Category",
                elements: [
                    {
                        type: "Group",
                        label: "Chronisch",
                        elements: [
                            {
                                type: "Control",
                                scope: "#/properties/chronic",
                                options: {
                                    format: "radio",
                                },
                            },
                        ],
                    },
                ],
            },
        ];

        const uiSchema = {
            type: "Categorization",
            label: "Fragen",
            elements: [...uiSchemas],
            options: {
                variant: "navigation",
                showNavButtons: true,
            },
        };

        const height = !this.state.errors.length ? "90%" : "100%";

        return (
            <View style={{ height }}>
                <JsonForms
                    schema={schema}
                    uischema={uiSchema}
                    data={this.state.data}
                    renderers={RNRenderers}
                    cells={RNCells}
                    onChange={this.onChange.bind(this)}
                />
            </View>
        );
    }
}
