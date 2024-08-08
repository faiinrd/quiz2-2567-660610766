// You can define interfaces for all React components here.
// Do not forget to export properly.

interface ReplyProps {
    userImagePath: string;
    username: string;
    replyText: string;
    likeNum: number;
}
export type { ReplyProps };

interface PostProps {
    name: string;
    id: string;
    status: string;
}
export type {PostProps};

interface CommentProps{
    userImagePath: string;
    username: string;
    commentText: string;
    likeNum: number;
    replies: string[];
}
export type { CommentProps };
