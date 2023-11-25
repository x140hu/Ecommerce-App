import { SettingGroupDto } from "../constants/dto";

const SettingsData: SettingGroupDto[] = [
  {
    title: "General",
    content: [
      {
        title: "Edit Profile",
        icon: "user",
        navigate: "EditProfile",
      },
      {
        title: "Change Password",
        icon: "lock",
        navigate: "",
      },
      {
        title: "Notification",
        icon: "bell-o",
        navigate: "",
      },
      {
        title: "Security",
        icon: "shield",
        navigate: "",
      },
      {
        title: "Language",
        icon: "language",
        navigate: "",
      },

    ],
  },
  {
    title: 'Preferences',
    content: [
      {
        title: 'Legal and Policies',
        icon: 'legal',
        navigate: ''
      },
      {
        title: 'Help & Support',
        icon: 'question-circle-o',
        navigate: ''
      },
      {
        title: 'Logout',
        icon: 'sign-out',
        navigate: ''
      },
     
      
    ]
  }
];

export { SettingsData };
