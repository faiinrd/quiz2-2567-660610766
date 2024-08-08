"use client";
import { useState } from "react";
import { CommentProps } from "@/libs/types";
import { comments } from "@/libs/comments";

export default function Comment({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}: CommentProps) {

const [comment] = useState<CommentProps[]>([]);

  return (
    <div>
        <div className="d-flex gap-2 my-2">
          <img
            src={userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              {username}
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>{commentText}</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>{likeNum} คน</span>
            </div>
          </div>
        </div>

      {/* You can use map-loop to render Reply component here */}
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
  );
}
