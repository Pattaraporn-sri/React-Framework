import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ClockCircleOutlined,
  CloudOutlined,
  CloudDownloadOutlined,
  StockOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function MenuPage() {
  const navigate = useNavigate();   
  const items: MenuItem[] = [
    {
      key: "1",
      icon: <CloudOutlined />,
      label: "Weather",
      onClick: () => navigate("/"),
    },
    {
      key: "2",
      icon: <ClockCircleOutlined />,
      label: "Hourluy weather",
      onClick: () => navigate("/detail"),
    },
    { key: "3", icon: <CloudDownloadOutlined />, label: "Rainfall" },
    { key: "4", icon: <StockOutlined />, label: "Air pressure" },
  ];
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="absolute mt-36 -ml-5" style={{ width: 256 }}>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
        className="ml-2"
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        className="ml-2 rounded-xl"
      />
    </div>
  );
}

export default MenuPage;
