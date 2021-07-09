import { RankedTester } from "@jsonforms/core";
import * as complex from "./complex";
import * as controls from "./controls";
import * as layouts from "./layouts";

export interface WithChildren {
    children: any;
}

export * from "./controls";
export * from "./complex";
export * from "./layouts";

export const RNRenderers: { tester: RankedTester; renderer: any }[] = [
    {
        tester: controls.radioGroupControlTester,
        renderer: controls.RadioGroupControl,
    },
    { tester: layouts.groupTester, renderer: layouts.GroupLayout },
    { tester: layouts.verticalLayoutTester, renderer: layouts.VerticalLayout },
    { tester: complex.labelRendererTester, renderer: complex.LabelRenderer },
    { tester: complex.categorizationTester, renderer: complex.Categorization },
];

export const RNCells: Array<{ tester: RankedTester; cell: any }> = [];
