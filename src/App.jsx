import { useMemo, useState } from "react";

const appSchema = {
  "type": "multi-screen-app",
  "title": "Yout testt",
  "entry": "home",
  "flow": {
    "home": "watch",
    "watch": "upload",
    "upload": "home"
  },
  "screens": {
    "home": {
      "type": "ecommerce",
      "title": "Home / Videos",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "container",
          "title": "Container",
          "padding": "28px",
          "margin": "0",
          "maxWidth": "none",
          "backgroundColor": "transparent",
          "borderRadius": "0px",
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "maxWidth": "",
              "height": "200px",
              "backgroundColor": "#1E293B",
              "textColor": "#FFFFFF",
              "borderRadius": "16px",
              "shadow": true,
              "padding": "34px",
              "type": "banner",
              "title": "RapidTube",
              "subtitle": "Trending videos, creator channels, and fresh uploads.",
              "id": "7addf29a-542a-4b69-9d29-68ce2f770226",
              "alignment": "left"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 12,
              "justify": "start",
              "align": "center",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "42px",
                  "backgroundColor": "#DC2626",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "10px 18px",
                  "fontSize": "14px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "All",
                  "action": "none",
                  "targetScreen": "",
                  "id": "85367911-f0b7-4ac0-afd5-06e708192fd6"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "42px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "10px 18px",
                  "fontSize": "14px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Music",
                  "action": "none",
                  "targetScreen": "",
                  "id": "6a7313c4-6ebd-4cf5-b50d-42624e7dcd0a"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "42px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "10px 18px",
                  "fontSize": "14px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Gaming",
                  "action": "none",
                  "targetScreen": "",
                  "id": "76b48ec7-379e-44c0-b7b3-4d33cbb8cdee"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "42px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "10px 18px",
                  "fontSize": "14px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Tech",
                  "action": "none",
                  "targetScreen": "",
                  "id": "5dca6162-a86a-4b90-a6e3-14f63face67f"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "42px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "10px 18px",
                  "fontSize": "14px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Tutorials",
                  "action": "none",
                  "targetScreen": "",
                  "id": "be8cd99a-dbf4-47ab-b468-c81e5c7917c6"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "42px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "10px 18px",
                  "fontSize": "14px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Podcasts",
                  "action": "none",
                  "targetScreen": "",
                  "id": "2f74e640-c677-4b03-8949-707a97228e5a"
                }
              ],
              "id": "b792c9c2-fc07-4309-a0a1-049dbc08cafc"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 12,
              "justify": "start",
              "align": "center",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#7C3AED",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 22px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "+ Upload New Video",
                  "action": "go-to-screen",
                  "targetScreen": "upload",
                  "id": "bab6d764-7bb7-42d0-a0f1-00a8dc872183"
                }
              ],
              "id": "de23756e-f601-43b2-8d52-1a8d805332c3"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "divider",
              "thickness": 1,
              "color": "#334155",
              "id": "b599c7e3-479c-427b-a8a3-5d97175efd9c"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "grid",
              "title": "Recommended Videos",
              "columns": 4,
              "gap": 24,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Creator Desk Setup Tour",
                  "price": "Creator Studio | 1.2M views",
                  "image": "",
                  "targetScreen": "watch",
                  "id": "85b73ba1-5712-44bf-9de8-85d054713f62"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Street Food Night Market",
                  "price": "City Bites | 842K views",
                  "image": "",
                  "targetScreen": "watch",
                  "id": "765da31c-4fec-43d9-ae8f-cd19cb405846"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Build a React App Fast",
                  "price": "Code Daily | 520K views",
                  "image": "",
                  "targetScreen": "watch",
                  "id": "62d43f68-6288-4198-994d-3c105decb5d3"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Lo-fi Focus Mix",
                  "price": "Sound Room | 3.4M views",
                  "image": "",
                  "targetScreen": "watch",
                  "id": "212b76fc-597b-4c4f-b6d7-75dbbb09b88a"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Tiny Home Walkthrough",
                  "price": "Modern Living | 690K views",
                  "image": "",
                  "targetScreen": "watch",
                  "id": "b13c76f0-16ed-4735-a1ac-15ed2b9c0c7a"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Camera Gear Guide",
                  "price": "Frame Lab | 315K views",
                  "image": "",
                  "targetScreen": "watch",
                  "id": "965210c6-2302-4eaa-9c7e-fe8d74210ad2"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Podcast Studio Setup",
                  "price": "Creator Studio | 210K views",
                  "image": "",
                  "targetScreen": "watch",
                  "id": "af34af32-6bf9-4ddf-bd86-0d948e748c80"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Gaming Highlights Reel",
                  "price": "Level Up | 980K views",
                  "image": "",
                  "targetScreen": "watch",
                  "id": "f65bb7e1-17bc-499f-97c4-de5b430b7464"
                }
              ],
              "id": "90d2c433-297d-48b0-bf34-4a128ce493ae",
              "width": "100%"
            }
          ],
          "id": "4f14bf5a-98fe-418c-8994-8af80f3ade6c",
          "width": "100%"
        }
      ]
    },
    "watch": {
      "type": "ecommerce",
      "title": "Watch Video",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "maxWidth": "",
          "height": "340px",
          "backgroundColor": "#1E293B",
          "textColor": "#FFFFFF",
          "borderRadius": "16px",
          "shadow": true,
          "padding": "36px",
          "type": "banner",
          "title": "Now Playing",
          "subtitle": "Large video placeholder for the selected creator upload.",
          "id": "d4dfa03d-6462-44c8-8a00-8c1e4b4b5877"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "spacer",
          "height": 16,
          "id": "ea21982f-ae06-4f49-8585-3a5fb53717c4"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "row",
          "gap": 44,
          "justify": "start",
          "align": "start",
          "wrap": false,
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "column",
              "width": "68%",
              "grow": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "auto",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "26px",
                  "type": "card",
                  "title": "Ultimate Creator Desk Setup",
                  "value": "1.2M views | Published today",
                  "targetScreen": "",
                  "id": "40033070-0eae-4682-a2ef-3bbe943a7eb8"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "auto",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "26px",
                  "type": "card",
                  "title": "Description",
                  "value": "A polished static watch page with creator context, metadata, and video details.",
                  "targetScreen": "",
                  "id": "1f620a57-4042-4895-8563-6f63c35d0e50"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "row",
                  "gap": 12,
                  "justify": "start",
                  "align": "center",
                  "wrap": true,
                  "children": [
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "widthMode": "auto",
                      "maxWidth": "",
                      "height": "46px",
                      "backgroundColor": "#7C3AED",
                      "textColor": "#FFFFFF",
                      "borderRadius": "12px",
                      "padding": "12px 24px",
                      "fontSize": "15px",
                      "fontWeight": "600",
                      "alignment": "left",
                      "type": "button",
                      "label": "Back to Videos",
                      "action": "go-to-screen",
                      "targetScreen": "home",
                      "id": "7997ebac-1f87-466e-85bf-9800d23412a6"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "widthMode": "auto",
                      "maxWidth": "",
                      "height": "46px",
                      "backgroundColor": "#7C3AED",
                      "textColor": "#FFFFFF",
                      "borderRadius": "12px",
                      "padding": "12px 24px",
                      "fontSize": "15px",
                      "fontWeight": "600",
                      "alignment": "left",
                      "type": "button",
                      "label": "Upload Your Video",
                      "action": "go-to-screen",
                      "targetScreen": "upload",
                      "id": "518b5a78-6e19-4c4d-abb6-ab5a5946aa4e"
                    }
                  ],
                  "id": "41b6b11e-9583-43cf-9659-0b50f41ca120"
                }
              ],
              "id": "7072f597-1190-4256-ba4c-01e4f26c7a70",
              "gap": 24
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "column",
              "width": "32%",
              "grow": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "22px",
                  "type": "card",
                  "title": "Creator Studio",
                  "value": "1.1M subscribers",
                  "targetScreen": "",
                  "id": "159f113e-ea46-49fb-8ee4-6b266ff3063f"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "20px",
                  "type": "card",
                  "title": "Editing Workflow Tips",
                  "value": "Frame Lab | 188K views",
                  "targetScreen": "watch",
                  "id": "4394dd2a-247a-4081-a3ab-b61a3d42454f"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "20px",
                  "type": "card",
                  "title": "Minimal Studio Tour",
                  "value": "Modern Living | 416K views",
                  "targetScreen": "watch",
                  "id": "0b64f471-a292-4339-a9c3-8bb90e08a0ad"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "20px",
                  "type": "card",
                  "title": "Budget Microphones",
                  "value": "Sound Room | 270K views",
                  "targetScreen": "watch",
                  "id": "d5fa6386-a640-48a8-ae81-3967475b61c4"
                }
              ],
              "id": "cc6518a2-723e-43c1-a046-725e631b3ca2",
              "gap": 16
            }
          ],
          "id": "fa9ecacd-6e96-41f5-8ce3-a259e46b4a55"
        }
      ]
    },
    "upload": {
      "type": "auth",
      "title": "Upload Video",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "maxWidth": "",
          "height": "auto",
          "backgroundColor": "#1E293B",
          "textColor": "#FFFFFF",
          "borderRadius": "16px",
          "shadow": true,
          "padding": "24px",
          "type": "banner",
          "title": "Upload Video",
          "subtitle": "Prototype form only. No files are stored.",
          "id": "d777999e-bae4-4e5d-a4fb-b77f1f9b54f8"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "input",
          "field": "videoTitle",
          "placeholder": "Video title",
          "inputType": "text",
          "id": "ce8903c2-d4d2-4432-b87d-cce93fa56e0d"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "input",
          "field": "description",
          "placeholder": "Short description",
          "inputType": "text",
          "id": "4e286235-0989-49d9-9c23-9c3e49edf4e7"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "input",
          "field": "category",
          "placeholder": "Category",
          "inputType": "text",
          "id": "b6a0d870-d021-47cb-a2f3-a6cd97926f86"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "widthMode": "full",
          "maxWidth": "",
          "height": "46px",
          "backgroundColor": "#DC2626",
          "textColor": "#FFFFFF",
          "borderRadius": "12px",
          "padding": "12px 24px",
          "fontSize": "15px",
          "fontWeight": "600",
          "alignment": "left",
          "type": "button",
          "label": "Upload Video",
          "action": "none",
          "targetScreen": "",
          "id": "5719bd40-cbb5-4fd3-aeec-09b62ead1359"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "widthMode": "full",
          "maxWidth": "",
          "height": "46px",
          "backgroundColor": "#1E293B",
          "textColor": "#FFFFFF",
          "borderRadius": "12px",
          "padding": "12px 24px",
          "fontSize": "15px",
          "fontWeight": "600",
          "alignment": "left",
          "type": "button",
          "label": "Back to Videos",
          "action": "go-to-screen",
          "targetScreen": "home",
          "id": "93aaae89-349a-4c2d-a99c-a8880b6e3863"
        }
      ]
    }
  },
  "navigation": [],
  "theme": {
    "primaryColor": "#7c3aed",
    "secondaryColor": "#06b6d4",
    "backgroundColor": "#0f172a",
    "surfaceColor": "#1e293b",
    "textColor": "#ffffff",
    "borderRadius": "12px",
    "fontFamily": "Inter",
    "spacing": "normal"
  },
  "components": []
};

const supportedBlockTypes = new Set([
  "hero",
  "banner",
  "card",
  "product-card",
  "button",
  "input",
  "table",
  "chart",
  "container",
  "row",
  "column",
  "grid",
  "spacer",
  "divider",
  "features",
  "cta"
]);

function getScreenKeys(schema) {
  return Object.keys(schema.screens || {});
}

function getInitialScreen(schema) {
  const screenKeys = getScreenKeys(schema);
  if (schema.entry && schema.screens?.[schema.entry]) return schema.entry;
  return screenKeys[0] || "home";
}

function getText(value, fallback = "") {
  return value === undefined || value === null || value === "" ? fallback : value;
}

function toCssSize(value, fallback = undefined) {
  if (value === undefined || value === null || value === "") return fallback;
  return typeof value === "number" ? value + "px" : value;
}

function getSurfaceStyle(block = {}) {
  return {
    backgroundColor: block.backgroundColor || undefined,
    color: block.textColor || undefined,
    borderRadius: block.borderRadius || undefined,
    padding: toCssSize(block.padding),
    margin: toCssSize(block.margin),
    height: toCssSize(block.height),
    maxWidth: block.maxWidth || undefined,
  };
}

function getLayoutStyle(block = {}) {
  return {
    ...getSurfaceStyle(block),
    "--gap": toCssSize(block.gap, "16px"),
  };
}

function getJustify(value) {
  if (value === "center") return "center";
  if (value === "end") return "flex-end";
  if (value === "between") return "space-between";
  return "flex-start";
}

function getAlign(value) {
  if (value === "start") return "flex-start";
  if (value === "end") return "flex-end";
  if (value === "stretch") return "stretch";
  return "center";
}

function getBlockTarget(block, currentScreen) {
  if (block.targetScreen && appSchema.screens?.[block.targetScreen]) {
    return block.targetScreen;
  }

  if (block.action === "next-screen") {
    const nextScreen = appSchema.flow?.[currentScreen];
    return nextScreen && appSchema.screens?.[nextScreen] ? nextScreen : null;
  }

  if (block.actions?.onClick?.type === "navigate") {
    const target = block.actions.onClick.target;
    return target && appSchema.screens?.[target] ? target : null;
  }

  return null;
}

function navigateTo(target, setCurrentScreen) {
  if (!target || !appSchema.screens?.[target]) return;
  setCurrentScreen(target);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function RenderChildren({ blocks = [], currentScreen, setCurrentScreen }) {
  if (!blocks.length) return null;

  return blocks.map((block, index) => (
    <RenderBlock
      key={block.id || block.type + "-" + index}
      block={block}
      currentScreen={currentScreen}
      setCurrentScreen={setCurrentScreen}
    />
  ));
}

function HeroBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);

  return (
    <section className={"hero hero-" + getText(block.variant, "default")} style={getSurfaceStyle(block)}>
      <div>
        <h1>{getText(block.title, "Hero Title")}</h1>
        <p>{getText(block.subtitle, "Hero subtitle")}</p>
        <div className="hero-actions">
          <button type="button" onClick={() => navigateTo(target, setCurrentScreen)}>
            {getText(block.buttonLabel, "Get Started")}
          </button>
        </div>
      </div>
    </section>
  );
}

function BannerBlock({ block }) {
  return (
    <section className="banner" style={getSurfaceStyle(block)}>
      <h2>{getText(block.title, "Banner")}</h2>
      <p>{getText(block.subtitle, "Limited time offer")}</p>
    </section>
  );
}

function CardBlock({ block }) {
  return (
    <article className="card" style={getSurfaceStyle(block)}>
      <h3>{getText(block.title, "Card title")}</h3>
      <p>{getText(block.value, "")}</p>
    </article>
  );
}

function ProductCardBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);
  const metaParts = String(getText(block.price, "$99")).split("|").map((part) => part.trim()).filter(Boolean);
  const primaryMeta = metaParts[0] || "$99";
  const secondaryMeta = metaParts.slice(1).join(" | ");

  return (
    <article className="product-card" style={getSurfaceStyle(block)}>
      <div className="product-media">
        {block.image ? (
          <img src={block.image} alt={getText(block.name, "Product")} />
        ) : (
          <span>{String(primaryMeta).startsWith("$") ? "Product" : "Video"}</span>
        )}
      </div>
      <h3>{getText(block.name, "Product")}</h3>
      <div className="product-meta">
        <span>{primaryMeta}</span>
        {secondaryMeta ? <small>{secondaryMeta}</small> : null}
      </div>
      <button type="button" onClick={() => navigateTo(target, setCurrentScreen)}>
        {String(primaryMeta).startsWith("$") ? "View Product" : "Watch"}
      </button>
    </article>
  );
}

function ButtonBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);
  const style = {
    backgroundColor: block.backgroundColor || undefined,
    color: block.textColor || undefined,
    borderRadius: block.borderRadius || undefined,
    padding: toCssSize(block.padding),
    height: toCssSize(block.height),
    fontSize: toCssSize(block.fontSize),
    fontWeight: block.fontWeight || undefined,
    width: block.widthMode === "full" ? "100%" : "auto",
    maxWidth: block.maxWidth || undefined,
  };

  return (
    <button className="button" type="button" style={style} onClick={() => navigateTo(target, setCurrentScreen)}>
      {getText(block.label, "Button")}
    </button>
  );
}

function InputBlock({ block }) {
  return (
    <input
      className="input"
      type={getText(block.inputType, "text")}
      placeholder={getText(block.placeholder, block.field || "Input")}
      aria-label={getText(block.placeholder, block.field || "Input")}
    />
  );
}

function TableBlock({ block }) {
  const rows = block.rows || [
    ["Customer", "Status", "Amount"],
    ["Alex Morgan", "Paid", "$129"],
    ["Sam Taylor", "Pending", "$89"],
  ];

  return (
    <section className="table-card" style={getSurfaceStyle(block)}>
      <h3>{getText(block.title, "Table")}</h3>
      <div className="table-scroll">
        <table>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) =>
                  rowIndex === 0 ? (
                    <th key={cellIndex}>{cell}</th>
                  ) : (
                    <td key={cellIndex}>{cell}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ChartBlock({ block }) {
  return (
    <section className="chart-card" style={getSurfaceStyle(block)}>
      <h3>{getText(block.title, "Chart")}</h3>
      <div className="chart-bars">
        {[45, 70, 56, 88, 64].map((height, index) => (
          <span key={index} style={{ height: height + "%" }} />
        ))}
      </div>
    </section>
  );
}

function ContainerBlock({ block, currentScreen, setCurrentScreen }) {
  return (
    <section className="layout-container" style={getLayoutStyle(block)}>
      <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </section>
  );
}

function RowBlock({ block, currentScreen, setCurrentScreen }) {
  const style = {
    ...getLayoutStyle(block),
    justifyContent: getJustify(block.justify),
    alignItems: getAlign(block.align),
    flexWrap: block.wrap === false ? "nowrap" : "wrap",
  };

  return (
    <section className="layout-row" style={style}>
      <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </section>
  );
}

function ColumnBlock({ block, currentScreen, setCurrentScreen }) {
  const style = {
    ...getLayoutStyle(block),
    flexBasis: block.width || "0",
    flexGrow: block.grow === false ? 0 : 1,
  };

  return (
    <section className="layout-column" style={style}>
      <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </section>
  );
}

function GridBlock({ block, currentScreen, setCurrentScreen }) {
  const style = {
    ...getLayoutStyle(block),
    "--columns": Math.max(1, Number(block.columns || 3)),
  };

  return (
    <section className="grid-section" style={style}>
      {block.title ? <h2>{block.title}</h2> : null}
      <div className="layout-grid">
        <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      </div>
    </section>
  );
}

function SpacerBlock({ block }) {
  return <div style={{ height: toCssSize(block.height, "32px") }} />;
}

function DividerBlock({ block }) {
  return <hr style={{ borderColor: block.color || "#334155", borderWidth: toCssSize(block.thickness, "1px") }} />;
}

function FeaturesBlock({ block }) {
  const items = block.items?.length ? block.items : ["Fast", "Simple", "Responsive"];

  return (
    <section className="features" style={getSurfaceStyle(block)}>
      <h2>{getText(block.title, "Features")}</h2>
      <div className="feature-grid">
        {items.map((item, index) => (
          <article className="card" key={index}>
            <h3>{item}</h3>
            <p>{block.descriptions?.[index] || "A polished generated section."}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CtaBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);

  return (
    <section className="cta" style={getSurfaceStyle(block)}>
      <h2>{getText(block.title, "Ready to start?")}</h2>
      <button type="button" onClick={() => navigateTo(target, setCurrentScreen)}>
        {getText(block.buttonLabel, "Get Started")}
      </button>
    </section>
  );
}

function UnsupportedBlock({ block }) {
  return (
    <section className="card">
      <h3>Unsupported block</h3>
      <p>{block.type}</p>
    </section>
  );
}

function RenderBlock({ block, currentScreen, setCurrentScreen }) {
  if (!block || !supportedBlockTypes.has(block.type)) {
    return <UnsupportedBlock block={block || { type: "unknown" }} />;
  }

  switch (block.type) {
    case "hero":
      return <HeroBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "banner":
      return <BannerBlock block={block} />;
    case "card":
      return <CardBlock block={block} />;
    case "product-card":
      return <ProductCardBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "button":
      return <ButtonBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "input":
      return <InputBlock block={block} />;
    case "table":
      return <TableBlock block={block} />;
    case "chart":
      return <ChartBlock block={block} />;
    case "container":
      return <ContainerBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "row":
      return <RowBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "column":
      return <ColumnBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "grid":
      return <GridBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "spacer":
      return <SpacerBlock block={block} />;
    case "divider":
      return <DividerBlock block={block} />;
    case "features":
      return <FeaturesBlock block={block} />;
    case "cta":
      return <CtaBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    default:
      return <UnsupportedBlock block={block} />;
  }
}

export default function App() {
  const screenKeys = useMemo(() => getScreenKeys(appSchema), []);
  const [currentScreen, setCurrentScreen] = useState(() => getInitialScreen(appSchema));
  const screen = appSchema.screens?.[currentScreen] || appSchema.screens?.[screenKeys[0]] || {
    title: "Untitled Screen",
    blocks: [],
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Exported RAPID App</p>
          <h1>{getText(appSchema.title, "RAPID App")}</h1>
        </div>
        <nav aria-label="Screens">
          {screenKeys.map((screenKey) => (
            <button
              key={screenKey}
              type="button"
              className={screenKey === currentScreen ? "active" : ""}
              onClick={() => navigateTo(screenKey, setCurrentScreen)}
            >
              {getText(appSchema.screens[screenKey]?.title, screenKey)}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <div className="screen-title">
          <p>Screen</p>
          <h2>{getText(screen.title, currentScreen)}</h2>
        </div>
        <RenderChildren blocks={screen.blocks} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      </main>
    </div>
  );
}
