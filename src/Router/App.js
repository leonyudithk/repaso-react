import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../Containers/Home";
import Add from "../Containers/Add";
import Edit from "../Containers/Edit";
import List from "../Containers/List";
import NavBar from "../Components/NavBar";
import Sider from "antd/es/layout/Sider";
import { Flex, Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Sidebar from "../Components/Sidebar";

function App() {

const contentStyle = {
  textAlign: "center", 
  lineHeight: "120px",
  height: "100%",
  color: "#000",
  backgroundColor: "#E5E8E8 ",
};



const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%',

};

  return (
    <BrowserRouter>
      <Flex gap="middle" wrap="wrap">
        <Layout style={layoutStyle}>
          <Sidebar/>
          <Layout>
            <NavBar />
            <Content style={contentStyle}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/list" element={<List />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Content>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>
        </Layout>
      </Flex>
    </BrowserRouter>
  );
}

export default App;
