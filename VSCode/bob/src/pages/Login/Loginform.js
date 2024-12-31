import React, { useState } from "react";
import InputField from "./InputField";
import { validateId, validatePassword } from "./validation";
import "./LoginForm.scss";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(null); // 로그인 실패 메시지

  // Mock 데이터 (테스트용)
  const mockUser = { id: "testuser", password: "password123" };

  // 입력값 상태 업데이트 및 실시간 유효성 검사
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });

    let error = null;
    if (name === "id") error = validateId(value);
    if (name === "password") error = validatePassword(value);

    setErrors({ ...errors, [name]: error });
  };

  // 폼 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      id: validateId(formData.id),
      password: validatePassword(formData.password),
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).every((error) => error === null)) {
      console.log("유효성 검사 실패");
      return;
    }

    // Mock 데이터로 로그인 테스트
    if (formData.id === mockUser.id && formData.password === mockUser.password) {
      console.log("로그인 성공!");
      setLoginError(null);
    } else {
      console.log("로그인 실패");
      setLoginError("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  const handleSignup = () => {
    console.log("회원가입 화면으로 이동");
    // 실제로는 회원가입 페이지로 라우팅하거나 UI 변경 로직 추가
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>로그인</h2>

      <InputField
        label="아이디"
        value={formData.id}
        onChange={(e) => handleChange("id", e.target.value)}
        placeholder="아이디를 입력하세요"
        errorMessage={errors.id}
      />

      <InputField
        label="비밀번호"
        value={formData.password}
        onChange={(e) => handleChange("password", e.target.value)}
        placeholder="비밀번호를 입력하세요"
        type="password"
        errorMessage={errors.password}
      />

      {loginError && <p style={{ color: "red" }}>{loginError}</p>}

      <button type="submit" className="login-button">
        로그인
      </button>

      <button type="button" className="signup-button" onClick={handleSignup}>
        회원가입
      </button>
    </form>
  );
};

export default LoginForm;
