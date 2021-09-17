import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import routes from "../../router";

const Index: React.FC = () => {
  const [breadcrumb, setBreadcrumb] = useState([]);
  const { pathname } = location;
  console.log(pathname, 'pathnamepathname')

  useEffect(() => {
    const current = renderBreadcrumb(routes, []);
    setBreadcrumb(current);
  }, [pathname]);

  const handleLoop = (item: any, newArr: any) => {
    if (item.path === pathname) {
      newArr.push(item);
    }
    if (item.children) {
      renderBreadcrumb(item.children, newArr);
    }
  };

  const renderBreadcrumb = (routesArr: any, newArr: any) => {
    routesArr.map((item: any) => {
      handleLoop(item, newArr);
    });
    return newArr;
  };

  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {breadcrumb.map((item: any) => {
        return <Breadcrumb.Item key={item.path}>{item.name}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
};

export default Index;
