import { useState, useContext, createContext, useEffect } from "react";
import AuthService from "../services/auth.service";
import { Cookies } from "react-cookie";

// สร้างอินสแตนซ์ของ Cookies เพื่อจัดการกับ cookies
const cookies = new Cookies();

// สร้าง Context สำหรับการจัดการสถานะการเข้าสู่ระบบ
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUser);

  function getUser() {
    const savedUser = cookies.set("user") || null;
    return savedUser;
  }

  // ฟังก์ชันสำหรับเข้าสู่ระบบ
  const login = (user) => {
    setUser(user); // ตั้งค่า user ใน state
  };

  // ฟังก์ชันสำหรับออกจากระบบ
  const logout = () => {
    AuthService.logout(); // ฟังก์ชัน logout ที่คุณต้องการ (ตรวจสอบให้แน่ใจว่าไม่มีปัญหากับ cookie)
    setUser(null); // ลบ user ใน state
  };

  useEffect(() => {
    cookies.set("user", JSON.stringify(user), {
      path: "/",
      expires: new Date(Date.now() + 86400 * 1000),
    });
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children} {/* แสดง children components */}
    </AuthContext.Provider>
  );
};

// hook ที่ใช้งานเพื่อดึงข้อมูลจาก AuthContext
export const useAuthContext = () => useContext(AuthContext);
