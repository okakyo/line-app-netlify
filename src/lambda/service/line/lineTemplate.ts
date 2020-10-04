import {
  Action,
  FlexBox,
  FlexBubble,
  FlexBubbleStyle,
  FlexCarousel,
  FlexImage,
  TemplateButtons,
  TemplateConfirm
} from "@line/bot-sdk";
import bodyParser from "body-parser";

// TODO: カルーセルテンプレートを設定する
export const CaroucelTemplate = (content: FlexBubble[]): FlexCarousel => {
  return {
    type: "carousel",
    contents: content
  };
};

// TODO: カードテンプレートを設定する
export const CardTemplate = (
  size?: "nano" | "micro" | "kilo" | "mega" | "giga",
  direction?: "ltr" | "rtl",
  header?: FlexBox,
  hero?: FlexBox | FlexImage,
  body?: FlexBox,
  footer?: FlexBox,
  styles?: FlexBubbleStyle
): FlexBubble => {
  return {
    type: "bubble",
    size: size,
    direction: direction,
    header: header,
    hero: hero,
    body: body,
    footer: footer,
    styles: styles
  };
};

// TODO: コンファームボタンのテンプレートを設定する
export const ConfirmTemplate = (
  text: string,
  actions: Action[]
): TemplateConfirm => {
  return {
    type: "confirm",
    text: text,
    actions: actions
  };
};

//TODO:  Button テンプレートを設定する
export const ButtonTemplate = (
  text: string,
  actions: Action[],
  thumbbnail?: string,
  title?: string,
  imageRatio?: "rectangle" | "square",
  imageBgColor?: string
): TemplateButtons => {
  return {
    type: "buttons",
    title: title,
    thumbnailImageUrl: thumbbnail,
    text: text,
    imageAspectRatio: imageRatio,
    imageBackgroundColor: imageBgColor,
    actions: actions
  };
};
