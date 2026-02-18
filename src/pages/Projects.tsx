import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";

const allProjects = [
  { 
    image: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/497856400_2503475473342914_934757569356650226_n.jpg?stp=c0.103.1080.1080a_cp6_dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=5df8b4&_nc_eui2=AeELLrXXofVUCfBLu55YgdSaAfVkZAps1lIB9WRkCmzWUuS76FrsvouuaYn01Nw9pYDkVM2psNQnEUUS_xww-RJc&_nc_ohc=VRvqaWwTSCMQ7kNvwFD6LPG&_nc_oc=AdnKTIrPYaEicmrHvAib_1n4BNAiGEyuzTtgT7n2yVQBvJWE1sAENgCjJoR7Dpixw4w&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=9Fn4yKWzmzfhdUnjFC0WeQ&oh=00_AfvHDOTvFwUJPC_Uy4fDDTdCR9Vo_5HJgkpHCMBRMiIjuQ&oe=699ACBC6", 
    title: "Structural Engineering Project", 
    category: "Commercial" 
  },
  { 
    image: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/497856400_2503479286675866_2606298097730089409_n.jpg?stp=c0.152.560.560a_cp6_dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=5df8b4&_nc_eui2=AeHC-8DFK-94IGmHV2Oz1pAMZwgCOrFWYR9nCAI6sVZhH-DHdG8gous8iRW_LrGffvetgDasMtVF5gS7gO4KZUgQ&_nc_ohc=cqOjO28K_88Q7kNvwH5VP9T&_nc_oc=AdnaXeklgflvLTBUsL9NscdEQT6y_JszEf-tS3kRuSaMPil7Xz9TYhYZYXYJjBU2pYQ&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=RPvPrIyRef4MZTCKDdC3aQ&oh=00_Afv1zUwD1En9xFLOSwXYAZElHco0_BIAXBk_ms7o40-6eA&oe=699AC6FC", 
    title: "Residential Development", 
    category: "Residential" 
  },
  { 
    image: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/498206694_2503475463342915_2948985823118728548_n.jpg?stp=c280.0.720.720a_dst-jpg_s206x206_tt6&_nc_cat=103&ccb=1-7&_nc_sid=5df8b4&_nc_eui2=AeFoUkScQhvo6-IoAaOGrMxupNA54SvFd9Ck0DnhK8V30FprAUFY_N890DYs45KP9KnizXUBQYehkQt3fF64mdZx&_nc_ohc=u7C2RJ0mhI0Q7kNvwE_xlx1&_nc_oc=AdmwAnFzkFJBGuZQhkWoW3866TES565gPF5sZWP0K9oa-wVICIfrIuig2mrqean7FRw&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=9Fn4yKWzmzfhdUnjFC0WeQ&oh=00_Afuvh_NUHi3kg30ylxM9DH4HXeh51yg-akAfp1J2hTJa9A&oe=699ABF93", 
    title: "Infrastructure Works", 
    category: "Infrastructure" 
  },
  { 
    image: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/497808624_2503709199986208_2865208742727786204_n.jpg?stp=c0.152.560.560a_cp6_dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=5df8b4&_nc_eui2=AeEtsQYATCCSjrBS9lE2truG4BdD_pbMLKngF0P-lswsqVJsts0Phh8ysPIK8p5EX3Nid43V5Eu0T-KQRsb491MZ&_nc_ohc=fGRUk-3y-H0Q7kNvwEkB637&_nc_oc=Adk09AiAQQaRs5LWk8vsaIi3-EZE6ttG0e7zDVkh8ycElrrDYM5Fk0iz21FMxJP2geE&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=0-z5j8-rUhZeAPzAt4T3JA&oh=00_AfvjQqqvWDd4ZIRdxQc5ijciANSsty5k-VzuuXojj12cgQ&oe=699ADB6C", 
    title: "Commercial Complex", 
    category: "Commercial" 
  },
  { 
    image: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/497746584_2503719489985179_5232636595511515025_n.jpg?stp=c200.0.1200.1200a_dst-jpg_s206x206_tt6&_nc_cat=111&ccb=1-7&_nc_sid=5df8b4&_nc_eui2=AeH9O7vHHzWrFcxvAnK2ibw3hPiYL8ueM5qE-Jgvy54zmmqe7Vp1ap32Bt2jmTnWd2iSsCUsRlYmBsA1KOVprJbI&_nc_ohc=W6p3d3WlQ4UQ7kNvwFAade6&_nc_oc=Adl8rG7owPUb9_PBMnMX5yVzXZ1lG7d6NtjykDwDc3VhwqyoUmzx0sZA4g7p2ZmqCIQ&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=EGna3uAeen73x0WVKU3guw&oh=00_Afug9-hcGB-kLnmaRnsVVVAzpEI2DwXL453pEMpQgXNTuQ&oe=699AD7FA", 
    title: "Modern Residence", 
    category: "Residential" 
  },
  { 
    image: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/498598590_2503832969973831_8751271931919221536_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeE9GcSx-fgfdcZ_lEK9Kmr2VLZI1xl19qVUtkjXGXX2pRnmBODNobLSre1RqjyjdLR6HGeLL8ir0UQkW1c0OXPT&_nc_ohc=5oft7VezswgQ7kNvwE5eHZD&_nc_oc=AdnNDuY2eOsbf9gf1HZoBpT936CNUm3aW-OlYa8Ke0eY9H9ZxIjTmVmasnLqaHisE2Q&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=6yM3iAZCJbEHeKf6kznNhg&oh=00_AftAzXs5wCTBYvV6lYDJ9tUFaj2xyFYmDYjoPM27cklxgA&oe=699AEFFE", 
    title: "Urban Development", 
    category: "Infrastructure" 
  },
  { 
    image: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/497887985_2503848883305573_7681431306909647287_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEIPJKaGsRJ_YYzGAxTDgVuyBkRmWE_ImPIGRGZYT8iY7_y24JKF7y0Bv1P9EhMihbEXXXFnl5yHRx6J28LasZ2&_nc_ohc=KR0VQV9iCtkQ7kNvwHva3Qh&_nc_oc=AdkKwXthdNDhwrkc2HK690CLfBrpD9z18LcnR4AvbET6fB4etzq9Jgk8MLhkc8ywHDE&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=CoeuLW5pPqjMMgDY7I_rQw&oh=00_Afst-yrYa9K72TRiSDpB5ZtAd1TcNzC1b-Y7dMzxPl02Kw&oe=699AE509", 
    title: "Steel Construction", 
    category: "Commercial" 
  },
  { 
    image: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/499444120_2504193169937811_4698375073619860044_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFNqI1-u7IgdqdaLK76RsLlsKCVRLRymjGwoJVEtHKaMRllBykcG4A_eC7yP79lomwrVzsyyWS7FYcmHQqVttTK&_nc_ohc=dYw-F56E6-kQ7kNvwFJu0Pg&_nc_oc=AdmgghjZA6DWNeeQdSn0WeYaEHjO-MhP7lI2ddI3uZ9u4a94Zop9RFO9-WFqW-xibS8&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=4N0e0zMOPqIZmUIvO7FZKA&oh=00_AftwTpd6yGM6vffNVg6rWPvFG2CDy42bsCSwnPgk38Yftw&oe=699AE66C", 
    title: "Engineering Excellence", 
    category: "Residential" 
  },
  { 
    image: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/497804217_2504192899937838_6743806134746177182_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHU7bSjwRmwYxNSIJtTB_rFrEfBL2kaEt-sR8EvaRoS34-gZkBdXdDBQfDBlAxc8T1izL4OsRYj6Al-cB1JxOoL&_nc_ohc=KahvYBpuI9cQ7kNvwHe3Y3M&_nc_oc=AdmCDWhbzlFjQ6MI8ycLHHLMRwJSHDVlbs4Pyqsp3x2Zd5OKwZOzkO6GqkUzY0NxYQA&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=Br8TYvpzkv_0hPjBML2DBA&oh=00_AfsSvQuRAf1DHO0frygDzHjhFR5CQov1QoL94AyOgBZRtw&oe=699AC2B6", 
    title: "Site Progress", 
    category: "Infrastructure" 
  },
  { 
    image: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/498650330_2504302696593525_6819329169602544118_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFnyBwfSJOWdPcU7JJ5CqzYi4TMSJAcZAOLhMxIkBxkAxLpCgJoKExDPR9RrYYRW3zxinkFiorWleM-Gw_urQUl&_nc_ohc=YUjhaFBtZ0wQ7kNvwFzWhy1&_nc_oc=Adk5Kq1kMXyc5tQYkHTWype43lIlO3Ay0ozLIKz0xOh1X3QaEO4qbR1Lh9BMRgDcBSE&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=SRx0yOx4SNe0qkvX41XGSg&oh=00_AfvhqMIoak6olLStqJ3hSh_CrOnORnyFCMpJTqUxMHAw8A&oe=699AE5D7", 
    title: "Foundation Work", 
    category: "Commercial" 
  },
  { 
    image: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/499651742_2506904226333372_395211802453963508_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHozDTJsCv-mHJP9cVRsbeOha361LckHpaFrfrUtyQelgoGdiowmAHyPe5Aje81xM4P1rM_Pb9yhKpJlyStIPT2&_nc_ohc=Fa7fL1sLUfoQ7kNvwHMWNJ7&_nc_oc=Adnk1Jy1zdtLu9BkqMZxi-2oLfnVWtwZWcf6NZ9FMYc_lk8l-YgMHMXQd46_qZFcRWI&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=7rZOY8BJ0eZ3dZgIe3mFZw&oh=00_AftGZoLWL3dsMbuZ_X_BZhAko8Eznjya5ttDKLe3GQqEAw&oe=699AD971", 
    title: "Project Review", 
    category: "Residential" 
  },
  { 
    image: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/528260037_2573390613018066_3255886297841320500_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeE0jGnOTHo51NkNuxPgbSPdzZj8-TFIq4TNmPz5MUirhEHsNyHPWk33D-MJdzc_r4b5DVHOlRyM-baK4wRthWB_&_nc_ohc=2v2QmaMGsU8Q7kNvwEyUWDl&_nc_oc=AdkHBbbke5CziOC6O58zE_iB_AqxaiPNRVM90f7J7TW-1SWIpggAqMDJqahHmqferdE&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=sDyjn7blqkVjeVr3toK75w&oh=00_AfshRSeuP_31jeqmpv-SCeOybEjui-YX9YYO7pT1IoB9Qw&oe=699AD23F", 
    title: "Structural Details", 
    category: "Infrastructure" 
  },
  { 
    image: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/633555169_2753209338369525_7285222084514088585_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFfr4H3Hcwzegbi9c4FzCupDgbeJz58g5MOBt4nPnyDk2Aa8Kd8Cc4XSz4sNsrfKmTeBkaricKJRLWqylLVWfTb&_nc_ohc=IvfTaxzd24kQ7kNvwEDTvoS&_nc_oc=AdnL_qpFKKGAlQJ2OR6-Oe7eb-GHQVlENWJmdAegM65t7_WVhFRnH20m37ppG-lHBLM&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=ELj6m3WkYnIV3fAmIQTAhg&oh=00_AfuCaXVq-MnRJtg6zk5D5yIkCqJJepOtZ1-WRKCKtbpw3A&oe=699ACC1C", 
    title: "Team at Work", 
    category: "Commercial" 
  },
  { 
    image: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/634940167_2757324491291343_3637851233721734552_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHrfYduek2DIuZnOkQdinRYUrrsAHL5IzhSuuwAcvkjOIMy3Zx60GrU_TE0pQDAoKmc5EZBzBgVMnX_Z1pRybyR&_nc_ohc=PuGfzhjmd-8Q7kNvwESILTm&_nc_oc=Adlg69ENv3dRLFfgYocC-AAGruMgVPIP4PtFuh5g65QCEV0UKbNm_K0WigJ4AA_dVEw&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=P75iO1AxTs3xTFP_UJvp4Q&oh=00_AftpQsiFk0XkBMtwTdkYGono1_9pJJ2MNWfkBVsa445K1Q&oe=699ADED4", 
    title: "Final Details", 
    category: "Residential" 
  }
];

const categories = ["All", "Commercial", "Residential", "Infrastructure"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? allProjects
    : allProjects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A3CC]/15 border border-[#00A3CC]/20 mb-4">
              <CheckCircle2 size={11} className="text-[#00A3CC]" />
              <span className="text-[10px] text-[#00A3CC] font-medium tracking-wide uppercase">Our Portfolio</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-[#0E4861] mb-3">
              Our Projects
            </h1>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Engineering excellence across commercial, residential, and infrastructure sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-[#0E4861] text-white shadow-lg"
                    : "bg-gray-100 text-[#0E4861] hover:bg-[#0E4861]/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((p, i) => (
                <ProjectCard key={p.title} {...p} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
