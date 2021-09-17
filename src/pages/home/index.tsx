import React, { useEffect } from "react";
import { Button } from "antd";
import { get } from "@/utils/request";

const Index = () => {
  useEffect(() => {
    get("/index-infos").then(() => {});
  }, []);

  return (
    <div>
      <Button type="primary">antd</Button>
      home
    </div>
  );
};

export default Index;
