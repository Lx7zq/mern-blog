import { useState, useContext, createContext, useEffect } from "react";
import AuthService from "../services/auth.service";
import { Cookies } from "react-cookie";

// สร้างอินสแตนซ์ของ Cookies เพื่อจัดการกับ cookies
const cookie = new Cookies();

// สร้าง Context สำหรับการจัดการสถานะการเข้าสู่ระบบ
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // ดึงข้อมูลผู้ใช้จาก cookies เมื่อ component ถูก mount
    const savedUser = cookie.get("user");

    // ตรวจสอบว่า savedUser มีข้อมูลและสามารถแปลงเป็น JSON ได้หรือไม่
    if (savedUser) {
      try {
        return JSON.parse(savedUser); // ถ้าถูกต้องก็จะคืนค่า user object
      } catch (e) {
        console.error("Error parsing user data from cookie:", e); // หากแปลงไม่ได้ จะ log ข้อความผิดพลาด
        return null; // คืนค่า null ถ้าข้อมูลไม่ถูกต้อง
      }
    }
    return null; // ถ้าไม่มีข้อมูลผู้ใช้ใน cookies ก็จะคืนค่า null
  });

  // ฟังก์ชันสำหรับเข้าสู่ระบบ
  const login = (user) => {
    setUser(user); // ตั้งค่า user ใน state
  };

  // ฟังก์ชันสำหรับออกจากระบบ
  const logout = () => {
    AuthService.logout(); // ฟังก์ชัน logout ที่คุณต้องการ (ตรวจสอบให้แน่ใจว่าไม่มีปัญหากับ cookie)
    setUser(null); // ลบ user ใน state
    cookie.remove("user", { path: "/" }); // ลบ cookie ที่เก็บข้อมูลผู้ใช้
  };

  // useEffect hook สำหรับการอัพเดท cookie เมื่อ user state เปลี่ยน
  useEffect(() => {
    if (user) {
      // ถ้ามีข้อมูลผู้ใช้ จะเก็บข้อมูลใน cookie
      cookie.set("user", JSON.stringify(user), {
        path: "/",
        expires: new Date(Date.now() + 86400 * 1000), // กำหนดอายุของ cookie เป็น 1 วัน (86400 วินาที)
      });
    } else {
      // ถ้าไม่มีผู้ใช้ใน state ก็จะลบ cookie
      cookie.remove("user", { path: "/" });
    }
  }, [user]); // useEffect จะทำงานเมื่อ state user เปลี่ยนแปลง

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children} {/* แสดง children components */}
    </AuthContext.Provider>
  );
};

// hook ที่ใช้งานเพื่อดึงข้อมูลจาก AuthContext
export const useAuthContext = () => useContext(AuthContext);
