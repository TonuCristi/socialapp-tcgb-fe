import styled from "styled-components";

type Comment = { comment: string; replies: Comment[] };

type Props = {
  comments?: Comment[];
  index: number;
};

export default function PostComments({ comments, index }: Props) {
  return (
    <StyledPostComments>
      {comments?.map((comment, i) => {
        // console.log(index);
        return (
          <Test key={i} $index={index}>
            <div>{index}</div>
            <div>{comment.comment}</div>
            <ul>
              {comment.replies.map((reply, i) => (
                <div key={i}>
                  <div>{reply.comment}</div>
                  <PostComments comments={reply.replies} index={i} />
                </div>
              ))}
            </ul>
          </Test>
        );
      })}
    </StyledPostComments>
  );
}

const StyledPostComments = styled.ul`
  height: 100%;
`;

const Test = styled.div<{ $index: number }>`
  margin-left: ${({ $index }) => $index * 10}px;
`;
