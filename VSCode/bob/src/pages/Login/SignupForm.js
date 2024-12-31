import React, { useState } from "react";
import InputField from "./InputField";
import {
  validateId,
  validatePassword,
  validateConfirmPassword,
  validateNickname,
  validatePhone,
  validateEmail,
} from "./validation";
import "./SignupForm.scss";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    confirmPassword: "",
    nickname: "",
    phone: "",
    email: "",
    type: "",
    photo: null,
  });

  const [errors, setErrors] = useState({});
  const [isIdAvailable, setIsIdAvailable] = useState(null); // ID 중복 여부

  // 입력값 상태 업데이트 및 실시간 유효성 검사
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });

    // 실시간 유효성 검사
    let error = null;
    if (name === "id") error = validateId(value);
    if (name === "password") error = validatePassword(value);
    if (name === "confirmPassword")
      error = validateConfirmPassword(formData.password, value);
    if (name === "nickname") error = validateNickname(value);
    if (name === "phone") error = validatePhone(value);
    if (name === "email") error = validateEmail(value);

    setErrors({ ...errors, [name]: error });
  };

  // ID 중복 확인
  const checkIdAvailability = async (id) => {
    if (!id.trim()) {
      alert("ID를 입력하세요.");
      return;
    }

    try {
      const response = await fetch(`/api/check-id?id=${id}`);
      if (!response.ok) {
        throw new Error("서버 오류");
      }

      const result = await response.json();
      setIsIdAvailable(result.available);
    } catch (error) {
      console.error("ID 중복 확인 중 오류 발생:", error);
      alert("중복 확인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  // 폼 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault();

    // 전체 유효성 검사
    const newErrors = {
      id: validateId(formData.id),
      password: validatePassword(formData.password),
      confirmPassword: validateConfirmPassword(
        formData.password,
        formData.confirmPassword
      ),
      nickname: validateNickname(formData.nickname),
      phone: validatePhone(formData.phone),
      email: validateEmail(formData.email),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === null)) {
      console.log("회원가입 성공!", formData);
      // 서버로 데이터 전송
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ID 필드 */}
      <InputField
        label="아이디"
        value={formData.id}
        onChange={(e) => handleChange("id", e.target.value)}
        placeholder="아이디를 입력하세요"
        errorMessage={errors.id}
      />
      <button
        type="button"
        onClick={() => checkIdAvailability(formData.id)}
        style={{ marginBottom: "10px" }}
      >
        중복 확인
      </button>
      {isIdAvailable === false && (
        <p style={{ color: "red" }}>이미 사용 중인 ID입니다.</p>
      )}
      {isIdAvailable === true && (
        <p style={{ color: "green" }}>사용 가능한 ID입니다.</p>
      )}

      {/* 비밀번호 */}
      <InputField
        label="비밀번호"
        value={formData.password}
        onChange={(e) => handleChange("password", e.target.value)}
        placeholder="비밀번호를 입력하세요"
        type="password"
        errorMessage={errors.password}
      />

      {/* 비밀번호 확인 */}
      <InputField
        label="비밀번호 확인"
        value={formData.confirmPassword}
        onChange={(e) => handleChange("confirmPassword", e.target.value)}
        placeholder="비밀번호를 다시 입력하세요"
        type="password"
        errorMessage={errors.confirmPassword}
      />

      {/* 닉네임 */}
      <InputField
        label="닉네임"
        value={formData.nickname}
        onChange={(e) => handleChange("nickname", e.target.value)}
        placeholder="닉네임을 입력하세요"
        errorMessage={errors.nickname}
      />

      {/* 전화번호 */}
      <InputField
        label="전화번호"
        value={formData.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
        placeholder="전화번호를 입력하세요"
        type="tel"
        errorMessage={errors.phone}
      />

      {/* 이메일 */}
      <InputField
        label="이메일"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        placeholder="이메일을 입력하세요"
        type="email"
        errorMessage={errors.email}
      />

      {/* 오토바이 배기량 */}
      <div>
        <label>오토바이 배기량:</label>
        <select
          value={formData.type}
          onChange={(e) => handleChange("type", e.target.value)}
        >
          <option value="">배기량 선택</option>
          <option value="50cc">50cc</option>
          <option value="125cc">125cc</option>
          <option value="250cc">250cc</option>
          <option value="500cc+">500cc 이상</option>
        </select>
      </div>

      {/* 프로필 사진 */}
      <div>
        <label>
          프로필 사진:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleChange("photo", e.target.files[0])}
          />
        </label>
        {formData.photo && <p>업로드된 파일: {formData.photo.name}</p>}
      </div>

      <button type="submit">회원가입</button>
    </form>
  );
};

export default SignupForm;
