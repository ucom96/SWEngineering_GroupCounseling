import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "../Common/Header";
import profile from "../../assets/profile.png";

const BoardListbox = styled.div`
  color: #212121;
  width: 100%;
  height: 300px;
  margin-bottom: 15px;
  border-radius: 10px;
  border: 1px solid #eaeaea;
  box-sizing: content-box;
`;
const BestPostBox = styled.div`
  color: #212121;
  width: 100%;
  height: 200px;
  margin: 8px 0px;
  margin-bottom: 12px;
  border-radius: 10px;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
`;
const StyledDiv = styled.div`
  height: 50px;
  & + & {
    border-top: 1px solid #ddd;
  }
  line-height: 50px;
  cursor: pointer;
`;
const HeadTextDiv = styled.div`
  color: #505050;
  text-align: left;
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;
const ContextTextDiv = styled(Link)`
  display: block;
  color: #505050;
  text-align: center;
  font-size: 13px;
`;
const FlexBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: start;
  margin: 10px 0px 0px 0px;
`;
const StyledSpan = styled.span`
  font-size: 10px;
  color: #505050;
  margin: 10px 0px 0px 5px;
`;
const ProfileImage = styled.img`
  width: 20px;
  height: 20px;
  margin: 10px 5px 10px 10px;
  border-radius: 6px;
  pointer: cursor;
`;

function BoardMain() {
  return (
    <>
      <Header title="자유게시판" link="/board"></Header>
      <BoardListbox>
        <StyledDiv>
          <HeadTextDiv>게시판 목록</HeadTextDiv>
        </StyledDiv>
        <StyledDiv>
          <ContextTextDiv to="/board/loveview">연애 게시판</ContextTextDiv>
        </StyledDiv>
        <StyledDiv>
          <ContextTextDiv to="/board/homeview">가정 게시판</ContextTextDiv>
        </StyledDiv>
        <StyledDiv>
          <ContextTextDiv to="/board/schoolview">학업 게시판</ContextTextDiv>
        </StyledDiv>
        <StyledDiv>
          <ContextTextDiv to="/board/futrueview">진로 게시판</ContextTextDiv>
        </StyledDiv>
        <StyledDiv>
          <ContextTextDiv to="/board/companyview">직장 게시판</ContextTextDiv>
        </StyledDiv>
      </BoardListbox>
      <BestPostBox>
        <StyledDiv>
          <HeadTextDiv>실시간 인기 글</HeadTextDiv>
        </StyledDiv>
        <FlexBox>
          <ProfileImage src={profile} alt="profile"></ProfileImage>
          <StyledSpan>익명</StyledSpan>
          {/* 이 부분  따로 컴포넌트로 뺄 예정->나중에 데이터로  받아서 추천 높은 부분 필터링 해서 진행할 예정  */}
        </FlexBox>
        <FlexBox>
          <ProfileImage src={profile} alt="profile"></ProfileImage>
          <StyledSpan>익명</StyledSpan>
        </FlexBox>
      </BestPostBox>
    </>
  );
}

export default withRouter(BoardMain);
