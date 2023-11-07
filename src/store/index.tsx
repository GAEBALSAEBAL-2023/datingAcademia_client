import { atom } from "recoil";

export const setUserAccessTokenState = atom({
  key: "setUserAccessTokenState",
  default: "",
});

export const setUserState = atom({
  key: "setUserState",
  default: {
    connected_at: "",
    id: 0,
    kakao_account: {
      profile: {
        is_default_image: false,
        nickname: "",
        profile_image_url: "",
        thumbnail_image_url: "",
      },
      profile_image_needs_agreement: false,
      profile_nickname_needs_agreement: false,
    },
    properties: {
      nickname: "",
      profile_image: "",
      thumbnail_image: "",
    },
  },
});
