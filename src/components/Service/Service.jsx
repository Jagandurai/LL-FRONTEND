import React, { Suspense, lazy } from "react";

// Lazy load components
const Hero = lazy(() => import("./Hero/Hero"));
const ServiceList = lazy(() => import("./ServiceList/ServiceList"));
const Customized = lazy(() => import("./Customized/Customized"));
const Content1 = lazy(() => import("./content1/content1"));
const Content2 = lazy(() => import("./content2/content2"));
const Content3 = lazy(() => import("./content3/content3"));
const Content4 = lazy(() => import("./content4/content4"));
const Content5 = lazy(() => import("./content5/content5"));
const Content6 = lazy(() => import("./content6/content6"));
const Content7 = lazy(() => import("./content7/content7"));
const Content8 = lazy(() => import("./content8/content8"));
const Content9 = lazy(() => import("./content9/content9"));
const Component1 = lazy(() => import("./Component1/Component1"));
const Component2 = lazy(() => import("./Component2/Component2"));
const Component3 = lazy(() => import("./Component3/Component3"));
const Switching = lazy(() => import("./Switching/Switching"));

const Service = () => {
  return (
    <div>
      

      {/* Other sections of your page */}
      <Suspense fallback={null}>
        <Hero />
      </Suspense>
      <Suspense fallback={null}>
        <Customized />
      </Suspense>
      <Suspense fallback={null}>
        <Switching />
      </Suspense>
      <Suspense fallback={null}>
        <Content1 />
      </Suspense>
      <Suspense fallback={null}>
        <Content2 />
      </Suspense>
      <Suspense fallback={null}>
        <Content3 />
      </Suspense>
      <Suspense fallback={null}>
        <Component1 />
      </Suspense>
      <Suspense fallback={null}>
        <Content4 />
      </Suspense>
      <Suspense fallback={null}>
        <Content5 />
      </Suspense>
      <Suspense fallback={null}>
        <Content6 />
      </Suspense>
      <Suspense fallback={null}>
        <Component2 />
      </Suspense>
      <Suspense fallback={null}>
        <Content7 />
      </Suspense>
      <Suspense fallback={null}>
        <Content8 />
      </Suspense>
      <Suspense fallback={null}>
        <Content9 />
      </Suspense>
      <Suspense fallback={null}>
        <ServiceList />
      </Suspense>
    </div>
  );
};

export default Service;
