import React from "react";
import { GetServerSideProps } from "next";
// import * as test from "/"
import Editor from "@components/Editor/Editor";
import dynamic from "next/dynamic";
// const Board = (props: any) => {
//   return <Editor></Editor>;
// };
const Board = dynamic(() => import("@components/Editor/Editor"), {
  ssr: false
});
// export const getServerSideProps = async (context: GetServerSideProps) => {
//   return null;
// };
export default Board;
