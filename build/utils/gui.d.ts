import { TextBlock } from "@babylonjs/gui/2D/controls/textBlock";
import { Rectangle } from "@babylonjs/gui/2D/controls/rectangle";
import { AdvancedDynamicTexture } from "@babylonjs/gui/2D/advancedDynamicTexture";
import { TInfoConfig } from "../types";
export declare const createAdvancedTextureForGUI: (name: string) => AdvancedDynamicTexture;
export declare const AddInfoPopUp: (config: TInfoConfig, advancedTexture: AdvancedDynamicTexture) => {
    container: Rectangle;
    infoText: TextBlock;
};
