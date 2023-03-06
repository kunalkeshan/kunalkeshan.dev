import React from "react";
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiShoppingBag, HiUser } from "react-icons/hi2";

const PrivateSidebar = () => {
  return (
    <div className="">
      <Sidebar>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox}>
              Kanban
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox}>
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox}>
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Upgrade to Pro
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox}>
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default PrivateSidebar;
