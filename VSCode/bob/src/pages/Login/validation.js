export const validateId = (id) => {
    if (!id.trim()) return "ID를 입력하세요.";
    if (id.length < 5) return "ID는 5자 이상이어야 합니다.";
    return null;
  };
  
  export const validatePassword = (password) => {
    if (!password.trim()) return "비밀번호를 입력하세요.";
    if (password.length < 8) return "비밀번호는 8자 이상이어야 합니다.";
    return null;
  };
  
  export const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) return "비밀번호가 일치하지 않습니다.";
    return null;
  };
  
  export const validateNickname = (nickname) => {
    if (!nickname.trim()) return "닉네임을 입력하세요.";
    return null;
  };
  
  export const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phone.trim()) return "전화번호를 입력하세요.";
    if (!phoneRegex.test(phone)) return "유효한 전화번호를 입력하세요.";
    return null;
  };
  
  export const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!email.trim()) return "이메일을 입력하세요.";
    if (!emailRegex.test(email)) return "유효한 이메일 주소를 입력하세요.";
    return null;
  };
  