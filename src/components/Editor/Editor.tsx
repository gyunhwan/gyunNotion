import React, { useEffect, useRef } from "react";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema, DOMParser } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";
import { addListNodes } from "prosemirror-schema-list";
import { exampleSetup } from "prosemirror-example-setup";
const Editor = () => {
  let viewRef = useRef<EditorView>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mySchema = new Schema({
      nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
      marks: schema.spec.marks
    });
    //@ts-ignore
    viewRef.current = new EditorView(editorRef.current!, {
      state: EditorState.create({
        doc: DOMParser.fromSchema(mySchema).parse(contentRef.current!),
        plugins: exampleSetup({ schema: mySchema })
      })
    });
  }, []);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div ref={editorRef} id="editor"></div>
      <div ref={contentRef} id="content"></div>
    </div>
  );
};
export default Editor;
