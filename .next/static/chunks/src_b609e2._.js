(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_b609e2._.js", {

"[project]/src/components/styles/Skills.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "highlight": "Skills-module__H33bja__highlight",
  "highlightNoHeader": "Skills-module__H33bja__highlightNoHeader",
  "highlightSkills": "Skills-module__H33bja__highlightSkills",
  "highlightTitle": "Skills-module__H33bja__highlightTitle",
  "shake": "Skills-module__H33bja__shake",
  "skillAll": "Skills-module__H33bja__skillAll",
  "skillAnimation": "Skills-module__H33bja__skillAnimation",
  "skillCert": "Skills-module__H33bja__skillCert",
  "skillFamiliar": "Skills-module__H33bja__skillFamiliar",
  "skillKnowledgeable": "Skills-module__H33bja__skillKnowledgeable",
  "skillProficient": "Skills-module__H33bja__skillProficient",
  "skills": "Skills-module__H33bja__skills",
});
}}),
"[project]/src/components/Skills.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Skills": (()=>Skills),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$styles$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/styles/Skills.module.css [app-client] (css module)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
const Skills = ({ header, proficient, knowledgeable, familiar })=>{
    _s();
    // ref used to animate child elements
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // setup event listeners for animating skills on hover
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Skills.useEffect": ()=>{
            const skills = Array.from(ref.current?.children ?? []);
            for (const skill of skills){
                // on hover, add class to animate the skill
                skill.addEventListener("mouseover", {
                    "Skills.useEffect": function(e) {
                        skill.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$styles$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillAnimation);
                    }
                }["Skills.useEffect"]);
                // on animation end, remove the animation class
                skill.addEventListener("animationend", {
                    "Skills.useEffect": function(e) {
                        skill.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$styles$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillAnimation);
                    }
                }["Skills.useEffect"]);
            }
        }
    }["Skills.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: header ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$styles$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlight : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$styles$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightNoHeader,
        children: [
            header && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$styles$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightTitle,
                children: header
            }, void 0, false, {
                fileName: "[project]/src/components/Skills.tsx",
                lineNumber: 39,
                columnNumber: 18
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$styles$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightSkills,
                children: [
                    proficient && proficient.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$styles$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillAll,
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$styles$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightSkill,
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$styles$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillProficient
                            ].join(" "),
                            children: s
                        }, s, false, {
                            fileName: "[project]/src/components/Skills.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this)),
                    knowledgeable && knowledgeable.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$styles$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillAll,
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$styles$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightSkill,
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$styles$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillKnowledgeable
                            ].join(" "),
                            children: s
                        }, s, false, {
                            fileName: "[project]/src/components/Skills.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this)),
                    familiar && familiar.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$styles$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillAll,
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$styles$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightSkill,
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$styles$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillFamiliar
                            ].join(" "),
                            children: s
                        }, s, false, {
                            fileName: "[project]/src/components/Skills.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Skills.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Skills.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
};
_s(Skills, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = Skills;
const __TURBOPACK__default__export__ = Skills;
var _c;
__turbopack_refresh__.register(_c, "Skills");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_b609e2._.js.map