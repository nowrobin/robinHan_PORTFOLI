// import { useQuery } from "@tanstack/react-query";
// import { useEffect, useMemo, useState } from "react";
// import styled from "styled-components";
// import getCountryName from "../../datasets/countryCode";
// import { useLocaleStore } from "../../store/useLocaleStore";



// interface NewsProps {
//   categories: [];
//   description: string;
//   image_url: string;
//   keywords: string;
//   language: string;
//   locale: string;
//   published_at: string;
//   snippet: string;
//   source: string;
//   title: string
//   url: string;
//   uuid: string;

// }

// export default function SideBar() {


//   const { locale } = useLocaleStore()

//   // const getNews = async () => {
//   //   return fetch(`https://api.thenewsapi.com/v1/news/top?${import.meta.env.VITE_NEWS_KEY}&locale=${locale}&limit=3`).then((res) => res.json())
//   // }
//   // // Queries
//   // const { data, isFetching, isLoading, isSuccess, isError, refetch } = useQuery({ queryKey: ['news'], queryFn: getNews })
//   // const [news, setNews] = useState<NewsProps[]>([]);

//   // useEffect(() => {
//   //   if (data) {
//   //     setNews(data.data.filter((value: NewsProps) => {
//   //       return getCountryName(value.locale).toLowerCase() == locale.toLowerCase()
//   //     }))

//   //   }
//   // }
//   //   , [data, isSuccess, locale])

//   const errorHandle = () => {
//     switch (true) {
//       case isLoading:
//         return <Loading>Cached Data Loading...</Loading>;
//       case isError:
//         return <div>Error occurred while fetching data.</div>;
//       case isFetching:
//         return <div>Fetching new data...</div>;
//       case isSuccess:
//         return (
//           <NewsContainer>
//             {news.map((value) => {
//               return <NewsItem key={value.uuid}>{value.title}</NewsItem>
//             })}
//           </NewsContainer>
//         )
//       default:
//         return (
//           <div>
//             Working on it BE PATIENCES
//           </div>
//         );
//     }
//   }



//   return (
//     <SideContainer>
//       <Header>TOP NEWS LIST</Header>
//       {errorHandle()}
//     </SideContainer>
//   )
// }

// const SideContainer = styled.div`
//   width: 20vw;
//   height: 100vh;
//   position:  fixed;
//   right:0;
//   top:0;
//   display: flex;
//   flex-direction: column;
//   justify-items: center;
//   padding-top: 20px;
//   background-color: transparent;
//   backdrop-filter: blur(5px);
//   z-index: 10;
// `
// const NewsItem = styled.div`
//   background-color: #ededed;
//   border-radius: 8px;
//   padding: 10px;
//   color:black;
//   &:hover{
//     box-shadow: 10px 10px 10px gray;
//   }
// `
// const NewsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   padding-left: 10%;
//   padding-right: 10%;
// `

// const Loading = styled.div`
  
// `
// const Header = styled.div`
//   margin-bottom: 30px;
// `



// // let news = [
// //   {
// //     title: "Idol Under Fire For Insensitive Post Following Jeju Air Plane Crash",
// //     uuid: "1",
// //     locale: "us"
// //   },
// //   {
// //     title: "Idol Under Fire For Insensitive Post Following Jeju Air Plane Crash",
// //     uuid: "2",
// //     locale: "kr"
// //   },
// //   {
// //     title: "Idol Under Fire For Insensitive Post Following Jeju Air Plane Crash",
// //     uuid: "3",
// //     locale: "kr"
// //   },
// //   {
// //     title: "Idol Under Fire For Insensitive Post Following Jeju Air Plane Crash",
// //     uuid: "4",
// //     locale: "kr"
// //   },
// //   {
// //     title: "Idol Under Fire For Insensitive Post Following Jeju Air Plane Crash",
// //     uuid: "5",
// //     locale: "kr"
// //   },
// //   {
// //     title: "Idol Under Fire For Insensitive Post Following Jeju Air Plane Crash",
// //     uuid: "44",
// //     locale: "jp"
// //   },
// //   {
// //     title: "Idol Under Fire For Insensitive Post Following Jeju Air Plane Crash",
// //     uuid: "55",
// //     locale: "cn"
// //   },
// // ]