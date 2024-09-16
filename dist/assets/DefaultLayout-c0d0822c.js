import{r as t,j as e,u as m,L as f,c as g,N as h,d as b,O as p}from"./index-b2dde0d1.js";import{L as C}from"./midfield-logo-7be4b6ac.js";const j=({children:s,exceptionRef:a,onClick:l,className:o})=>{const n=t.useRef(null);return t.useEffect(()=>{const c=r=>{let x=!1;a?x=n.current&&n.current.contains(r.target)||a.current&&a.current===r.target||a.current&&a.current.contains(r.target):x=n.current&&n.current.contains(r.target),x||l()};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[a,l]),e.jsx("div",{ref:n,className:`${o||""}`,children:s})},k=()=>{const[s,a]=t.useState(!1),{userData:l}=m();return e.jsx(j,{onClick:()=>a(!1),className:"relative",children:e.jsxs("div",{onClick:()=>a(!s),className:"flex items-center gap-4",children:[e.jsxs("span",{className:"hidden text-right lg:block",children:[e.jsx("span",{className:"block text-sm font-medium text-black dark:text-white",children:l==null?void 0:l.name}),e.jsx("span",{className:" text-xs sm:block hidden",children:l==null?void 0:l.email})]}),e.jsx("span",{className:"h-12 w-12 rounded-full flex justify-center items-center overflow-hidden",children:e.jsx("img",{src:l==null?void 0:l.picture,alt:"User"})})]})})},w="/assets/midfield-logo-small-b292939e.png",v=s=>e.jsx("header",{className:"sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none",children:e.jsxs("div",{className:"flex flex-grow items-center justify-between lg:justify-end px-4 py-4 shadow-2 md:px-6 2xl:px-11",children:[e.jsxs("div",{className:"flex items-center gap-2 sm:gap-4 lg:hidden",children:[e.jsx("button",{"aria-controls":"sidebar",onClick:a=>{a.stopPropagation(),s.setSidebarOpen(!s.sidebarOpen)},className:"z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden",children:e.jsxs("span",{className:"relative block h-5.5 w-5.5 cursor-pointer",children:[e.jsxs("span",{className:"du-block absolute right-0 h-full w-full",children:[e.jsx("span",{className:`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!s.sidebarOpen&&"!w-full delay-300"}`}),e.jsx("span",{className:`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!s.sidebarOpen&&"delay-400 !w-full"}`}),e.jsx("span",{className:`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!s.sidebarOpen&&"!w-full delay-500"}`})]}),e.jsxs("span",{className:"absolute right-0 h-full w-full rotate-45",children:[e.jsx("span",{className:`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!s.sidebarOpen&&"!h-0 !delay-[0]"}`}),e.jsx("span",{className:`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!s.sidebarOpen&&"!h-0 !delay-200"}`})]})]})}),e.jsx(f,{className:"block flex-shrink-0 lg:hidden",to:"/dashboard",children:e.jsx("img",{src:w,alt:"Logo",className:"h-10"})})]}),e.jsx("div",{className:"flex items-center  gap-3 2xsm:gap-7",children:e.jsx(k,{})})]})}),y=({sidebarOpen:s,setSidebarOpen:a})=>{const l=g(),{pathname:o}=l,{logOut:n}=m(),c=t.useRef(null),r=t.useRef(null),x=localStorage.getItem("sidebar-expanded"),[u,N]=t.useState(x===null?!1:x==="true");return t.useEffect(()=>{const d=({target:i})=>{!r.current||!c.current||!s||r.current.contains(i)||c.current.contains(i)||a(!1)};return document.addEventListener("click",d),()=>document.removeEventListener("click",d)}),t.useEffect(()=>{const d=({keyCode:i})=>{!s||i!==27||a(!1)};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)}),t.useEffect(()=>{var d,i;localStorage.setItem("sidebar-expanded",u.toString()),u?(d=document.querySelector("body"))==null||d.classList.add("sidebar-expanded"):(i=document.querySelector("body"))==null||i.classList.remove("sidebar-expanded")},[u]),e.jsxs("aside",{ref:r,className:`absolute left-0 top-0 z-9999 flex h-[100dvh] w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${s?"translate-x-0":"-translate-x-full"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2 px-6 py-4 lg:py-6.5",children:[e.jsx(h,{to:"/dashboard",children:e.jsx("img",{src:C,alt:"Logo",className:"h-18"})}),e.jsx("button",{ref:c,onClick:()=>a(!s),"aria-controls":"sidebar","aria-expanded":s,className:"block lg:hidden",children:e.jsx("svg",{className:"fill-current",width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z",fill:""})})})]}),e.jsxs("div",{className:"no-scrollbar h-full flex flex-col justify-between overflow-y-auto duration-300 ease-linear",children:[e.jsx("nav",{className:"mt-5 py-4 px-4 lg:mt-9 lg:px-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 ml-4 text-sm font-semibold text-bodydark2",children:"MENU"}),e.jsxs("ul",{className:"mb-6 flex flex-col gap-1.5",children:[e.jsx("li",{children:e.jsxs(h,{to:"/dashboard",className:`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${o==="/dashboard"&&"bg-graydark dark:bg-meta-4"}`,children:[e.jsxs("svg",{className:"fill-current",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z",fill:""}),e.jsx("path",{d:"M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z",fill:""}),e.jsx("path",{d:"M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z",fill:""}),e.jsx("path",{d:"M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z",fill:""})]}),"Dashboard"]})}),e.jsx("li",{children:e.jsxs(h,{to:"apps",className:`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${o.includes("apps")&&"bg-graydark dark:bg-meta-4"}`,children:[e.jsxs("svg",{className:"fill-current",width:"18",height:"19",viewBox:"0 0 18 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{clipPath:"url(#clip0_130_9756)",children:e.jsx("path",{d:"M15.7501 0.55835H2.2501C1.29385 0.55835 0.506348 1.34585 0.506348 2.3021V15.8021C0.506348 16.7584 1.29385 17.574 2.27822 17.574H15.7782C16.7345 17.574 17.5501 16.7865 17.5501 15.8021V2.3021C17.522 1.34585 16.7063 0.55835 15.7501 0.55835ZM6.69385 10.599V6.4646H11.3063V10.5709H6.69385V10.599ZM11.3063 11.8646V16.3083H6.69385V11.8646H11.3063ZM1.77197 6.4646H5.45635V10.5709H1.77197V6.4646ZM12.572 6.4646H16.2563V10.5709H12.572V6.4646ZM2.2501 1.82397H15.7501C16.0313 1.82397 16.2563 2.04897 16.2563 2.33022V5.2271H1.77197V2.3021C1.77197 2.02085 1.96885 1.82397 2.2501 1.82397ZM1.77197 15.8021V11.8646H5.45635V16.3083H2.2501C1.96885 16.3083 1.77197 16.0834 1.77197 15.8021ZM15.7501 16.3083H12.572V11.8646H16.2563V15.8021C16.2563 16.0834 16.0313 16.3083 15.7501 16.3083Z",fill:""})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_130_9756",children:e.jsx("rect",{width:"18",height:"18",fill:"white",transform:"translate(0 0.052124)"})})})]}),"Apps"]})})]})]})}),e.jsx("div",{className:"px-4 py-4 lg:px-6",children:e.jsxs("button",{className:"px-4 flex items-center gap-2.5 rounded-sm py-2 w-full font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4",onClick:()=>n(),children:[e.jsxs("svg",{className:"fill-current",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z",fill:""}),e.jsx("path",{d:"M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z",fill:""})]}),"Sign Out"]})})]})]})},L=()=>{const[s,a]=t.useState(!1),{userData:l,isAuthenticated:o}=m();return o===!1?e.jsx(b,{to:"/auth/signin"}):e.jsx("div",{className:"dark:bg-boxdark-2 dark:text-bodydark",children:e.jsxs("div",{className:"flex h-screen overflow-hidden",children:[e.jsx(y,{sidebarOpen:s,setSidebarOpen:a}),e.jsxs("div",{className:"relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden",children:[e.jsx(v,{sidebarOpen:s,setSidebarOpen:a,user:l}),e.jsx("main",{children:e.jsx("div",{className:"mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10",children:e.jsx(p,{})})})]})]})})};export{L as default};
