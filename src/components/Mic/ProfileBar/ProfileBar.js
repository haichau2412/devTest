import React, { useState } from "react";
import styles from "../../../assets/css/Profile-bar.module.css";

const ProfileBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={`${styles["profile-bar"]} flex`}>
      <div className={styles.loader} tooltip='Syncing Profiles'></div>
      <div>profile</div>

      <input
        type='text'
        name='profile'
        id={styles.profileEdit}
        maxLength='25'
      />

      <div className='dropdown-area'>
        <div id='profileDrop' className='s3-dropdown'>
          <div className='selected'>profile 5</div>
          <div className='icon expand'></div>
        </div>
        <div id='profileDropOpt' className='s3-options flex'>
          <div className='option'>default profile</div>
          <div className='option'>profile 2</div>
          <div className='option'>profile 3</div>
          <div className='option'>profile 4</div>
          <div className='option selected'>profile 5</div>
          <div className='option'>profile 6</div>
          <div className='option'>profile 7</div>
          <div className='option'>profile 8</div>
        </div>
      </div>

      <div
        className={`${styles["dots3"]} ${styles["hover-border"]} ${
          showMenu ? styles.active : ""
        }`}
        id='profileMenuToggle'
        onClick={() => setShowMenu((pre) => !pre)}
      >
        <div
          className={`${styles["profile-act"]} ${showMenu ? styles.show : ""} `}
          id='profileMenu'
        >
          <div className={`act ${styles["action"]}`}>add</div>
          <div className={`act ${styles["action"]}`}>import</div>
          <div className={`act ${styles["divider"]}`}></div>
          <div className={`act ${styles["action"]}`}>rename</div>
          <div className={`act ${styles["action"]}`}>duplicate</div>
          <div className={`act ${styles["action"]}`}>export</div>
          <div className={`act ${styles["divider"]}`}></div>
          <div className={`act ${styles["action"]}`} id='deleteAction'>
            delete
          </div>
        </div>
      </div>

      <div
        id='deleteAlert'
        className={`flex ${styles.alert} ${styles["profile-del"]}`}
      >
        <div className={styles.title}>delete profile</div>
        <div className={`${styles["body-text"]} t-center`}>
          You're about to delete this profile. All bindings in this profile will
          be deleted.
        </div>
        <div className={styles["thx-btn"]} id='deleteConfirm'>
          delete
        </div>
      </div>
      <div
        className={`${styles.obm} ${styles["hover-border"]}`}
        tooltip='On-board Profiles'
      ></div>
      <div className={styles.divider}></div>
      <div
        className={`${styles.batt} ${styles["batt-30"]}`}
        tooltip='30% Battery'
      ></div>
    </div>
  );
};

export default ProfileBar;
