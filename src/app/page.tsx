"use client";

import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import Reply from "@/components/Reply";
import { CommentProps } from "@/libs/types";
import { useState } from "react";


export default function Home() {
  const [comment] = useState<CommentProps[]>([]);
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwnner name="นพรดา กฤษวัฒนานนท์" id="660610766" status="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"/>

        {/* Comment Example */}
        <Comment />

        {/* Reply Example */}
        <Reply />

        {/* map-loop render Comment component here */}
        {comment.map((commt)=>(
        <Comment 
          userImagePath={commt.userImagePath}
          username={commt.username}
          commentText={commt.commentText}
          likeNum={commt.likeNum}
          replies={commt.replies}
        />
      ))}
      </div>
    </div>
  );
}
