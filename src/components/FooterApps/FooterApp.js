import React from "react";
import "./FooterApp.css";

function FooterApp() {
  return (
    <div className="footer__app">
      <h3 className="footer__title">Приложения</h3>
      <ul className="footer__app__list">
        <li className="footer__app__item">
          <svg
            width="112"
            height="34"
            viewBox="0 0 112 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.261 21.605c-.69 1.533-1.02 2.217-1.91 3.572-1.24 1.892-2.988 4.247-5.154 4.267-1.925.018-2.42-1.255-5.031-1.24-2.612.014-3.158 1.262-5.083 1.245-2.166-.02-3.823-2.148-5.063-4.039C-.45 20.12-.811 13.914 1.328 10.614 2.848 8.268 5.246 6.896 7.5 6.896c2.296 0 3.74 1.261 5.637 1.261 1.842 0 2.964-1.263 5.618-1.263 2.006 0 4.132 1.094 5.647 2.987-4.963 2.724-4.157 9.825.858 11.724"
              fill="#fff"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.742 4.781C17.706 3.541 18.44 1.79 18.174 0 16.6.109 14.755 1.113 13.68 2.422c-.976 1.188-1.783 2.95-1.469 4.663 1.72.054 3.5-.975 4.532-2.304z"
              fill="#fff"
            ></path>
            <path
              d="M35.637 8.003l.236-3.717h2.777v5.672h-3.544v-.043c.37-.435.477-1.031.531-1.912zM34.257 11h5.462v1.53h1.101V9.959h-.967V3.25h-5.048l-.285 4.7c-.06 1.025-.252 1.686-.806 2.008h-.564v2.573h1.107V11zm9.91.107c1.616 0 2.68-1.111 2.68-2.932 0-1.816-1.07-2.927-2.68-2.927-1.612 0-2.68 1.111-2.68 2.927 0 1.82 1.063 2.932 2.68 2.932zm0-.956c-.908 0-1.499-.72-1.499-1.976 0-1.252.59-1.971 1.498-1.971s1.499.72 1.499 1.97c0 1.258-.585 1.977-1.498 1.977zm8.502-2.991c-.161-1.042-1.031-1.912-2.428-1.912-1.606 0-2.648 1.154-2.648 2.927 0 1.81 1.042 2.932 2.659 2.932 1.332 0 2.261-.773 2.428-1.906h-1.117c-.162.59-.613.934-1.3.934-.903 0-1.493-.736-1.493-1.96 0-1.193.585-1.96 1.482-1.96.72 0 1.15.424 1.3.945h1.117zm5.124-1.81h-4.7v.918h1.773V11h1.154V6.268h1.773V5.35zm1.413 7.755c1.176 0 1.73-.44 2.212-1.81L63.54 5.35h-1.225l-1.434 4.597h-.016L59.431 5.35h-1.257l2.041 5.655c0 .006-.102.339-.102.35-.177.58-.462.805-1.004.805-.097 0-.29 0-.376-.021v.94c.086.016.381.026.473.026zM67.97 11h1.16V5.35h-4.817V11h1.154V6.268h2.503V11zm6.123 0h1.155V5.35h-1.155v2.277h-2.556V5.35h-1.155V11h1.155V8.54h2.556V11zm4.845.107c1.617 0 2.68-1.111 2.68-2.932 0-1.816-1.069-2.927-2.68-2.927-1.611 0-2.68 1.111-2.68 2.927 0 1.82 1.063 2.932 2.68 2.932zm0-.956c-.908 0-1.499-.72-1.499-1.976 0-1.252.591-1.971 1.499-1.971.908 0 1.499.72 1.499 1.97 0 1.258-.586 1.977-1.499 1.977zm8.245-3.958c.564 0 .87.263.87.73 0 .5-.328.752-.983.752h-1.074V6.193h1.187zm-.038 2.293c.763 0 1.139.28 1.139.838 0 .543-.355.833-1.01.833h-1.278v-1.67h1.149zM84.853 11h2.6c1.224 0 1.986-.634 1.986-1.627 0-.71-.483-1.225-1.213-1.322v-.043c.542-.102.961-.633.961-1.219 0-.892-.666-1.44-1.767-1.44h-2.567V11zM41.404 30h2.39l-4.5-12.683h-2.557L32.237 30h2.338l1.081-3.278h4.667L41.404 30zM37.96 19.559h.061l1.767 5.414h-3.603l1.775-5.414zm12.094.966c-1.354 0-2.408.686-2.936 1.767h-.044v-1.608h-2.136v12.383h2.189v-4.614h.044c.51 1.046 1.564 1.696 2.918 1.696 2.338 0 3.832-1.837 3.832-4.807 0-2.98-1.503-4.817-3.867-4.817zm-.668 7.831c-1.362 0-2.268-1.186-2.277-3.014.01-1.81.915-3.015 2.277-3.015 1.415 0 2.294 1.178 2.294 3.015 0 1.846-.88 3.014-2.294 3.014zm11.056-7.83c-1.353 0-2.408.685-2.935 1.766h-.044v-1.608h-2.136v12.383h2.189v-4.614h.044c.51 1.046 1.564 1.696 2.918 1.696 2.338 0 3.832-1.837 3.832-4.807 0-2.98-1.503-4.817-3.868-4.817zm-.668 7.83c-1.362 0-2.267-1.186-2.276-3.014.009-1.81.914-3.015 2.276-3.015 1.415 0 2.294 1.178 2.294 3.015 0 1.846-.879 3.014-2.294 3.014zm9.246-1.924c.097 2.338 2.013 3.779 4.931 3.779 3.068 0 5.001-1.512 5.001-3.92 0-1.89-1.09-2.953-3.665-3.542l-1.459-.334c-1.555-.37-2.197-.861-2.197-1.705 0-1.055.967-1.758 2.4-1.758 1.45 0 2.443.712 2.548 1.899h2.162c-.052-2.233-1.898-3.745-4.693-3.745-2.76 0-4.72 1.521-4.72 3.771 0 1.81 1.108 2.936 3.445 3.472l1.644.386c1.6.378 2.25.906 2.25 1.82 0 1.054-1.063 1.81-2.593 1.81-1.547 0-2.716-.764-2.856-1.933h-2.198zm12.033-7.928v2.18h-1.336v1.687h1.336v5.15c0 1.811.79 2.523 2.803 2.523.466 0 .897-.035 1.134-.088v-1.67a4.24 4.24 0 01-.624.044c-.773 0-1.125-.351-1.125-1.116V22.37h1.758v-1.687H83.24v-2.18h-2.188zm9.386 11.68c2.734 0 4.51-1.819 4.51-4.842 0-3.015-1.794-4.852-4.51-4.852-2.715 0-4.508 1.846-4.508 4.852 0 3.023 1.775 4.843 4.508 4.843zm0-1.73c-1.388 0-2.285-1.126-2.285-3.112 0-1.978.906-3.111 2.285-3.111 1.39 0 2.286 1.133 2.286 3.11 0 1.987-.897 3.112-2.285 3.112zM96.354 30h2.189v-5.423c0-1.31.747-2.11 1.986-2.11.369 0 .703.053.888.124v-1.978a3.104 3.104 0 00-.686-.088c-1.098 0-1.916.65-2.232 1.785h-.044v-1.626h-2.1V30zm9.853-7.814c1.257 0 2.101.923 2.145 2.242H104c.088-1.301.976-2.242 2.206-2.242zm2.153 5.028c-.237.773-1.01 1.283-2.03 1.283-1.433 0-2.347-1.002-2.347-2.496v-.132h6.513v-.712c0-2.83-1.652-4.667-4.298-4.667-2.689 0-4.394 1.943-4.394 4.887 0 2.97 1.687 4.808 4.482 4.808 2.206 0 3.841-1.213 4.122-2.971h-2.048z"
              fill="#fff"
            ></path>
          </svg>
        </li>

        <li className="footer__app__item">
          <svg
            width="121"
            height="33"
            viewBox="0 0 121 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.857 2C2.103 2 0 4.104 0 9.854v12.292C0 27.894 2.104 30 7.857 30H20.14c5.752 0 7.86-2.104 7.86-7.854V9.854C28 4.106 25.896 2 20.143 2H7.857z"
              fill="#1F1D24"
            ></path>
            <path
              d="M16.065 23.22h-3.13a.5.5 0 01-.499-.5v-2.075a.5.5 0 01.5-.5h3.129a.5.5 0 01.5.5v2.075a.5.5 0 01-.5.5z"
              fill="#fff"
            ></path>
            <path
              d="M16.065 20.145H14.5v3.074h1.565a.5.5 0 00.499-.5v-2.074a.5.5 0 00-.5-.5z"
              fill="#fff"
            ></path>
            <path
              d="M18.029 23.22H10.97a.5.5 0 010-1h7.058a.5.5 0 010 1z"
              fill="#fff"
            ></path>
            <path
              d="M18.029 22.22H14.5v1h3.529a.5.5 0 000-1zM22.5 21.144h-16a.5.5 0 01-.5-.5v-1.997a.5.5 0 01.5-.5h16a.5.5 0 01.5.5v1.998a.5.5 0 01-.5.499z"
              fill="#fff"
            ></path>
            <path
              d="M22.5 18.148h-8v2.996h8a.5.5 0 00.5-.5v-1.997a.5.5 0 00-.5-.5z"
              fill="#fff"
            ></path>
            <path
              d="M22.5 19.147h-16a.5.5 0 01-.5-.5v-8.366a.5.5 0 01.5-.5h16a.5.5 0 01.5.5v8.367a.5.5 0 01-.5.499z"
              fill="#555"
            ></path>
            <path
              d="M43.052 10V2.25h-6.284V10h1.209V3.297h3.878V10h1.197zm4.34-5.742c-.816 0-1.466.414-1.8 1.064h-.02V4.35h-1.123v7.52h1.16v-2.8h.027c.322.63.966 1.027 1.778 1.027 1.417 0 2.358-1.134 2.358-2.922 0-1.789-.946-2.917-2.38-2.917zm-.306 4.856c-.892 0-1.483-.763-1.483-1.94 0-1.165.597-1.938 1.483-1.938.918 0 1.493.757 1.493 1.939 0 1.187-.575 1.939-1.493 1.939zm4.829.886l2.61-3.97h.043V10h1.144V4.35h-1.144l-2.61 3.958h-.043V4.35H50.77V10h1.145zm6.751-2.573l.156-2.159h1.74V10h1.155V4.35H57.8l-.193 3.029c-.064.983-.258 1.638-.806 1.638-.145 0-.252-.027-.306-.043v1.02c.07.027.204.06.392.06 1.268 0 1.67-1.026 1.778-2.627zm6.73 2.68c1.617 0 2.68-1.111 2.68-2.932 0-1.816-1.069-2.927-2.68-2.927-1.611 0-2.68 1.111-2.68 2.927 0 1.82 1.063 2.932 2.68 2.932zm0-.956c-.908 0-1.498-.72-1.498-1.976 0-1.252.59-1.971 1.498-1.971s1.498.72 1.498 1.97c0 1.258-.585 1.977-1.498 1.977zm8.717-2.148l2.315-2.653h-1.37l-2.051 2.417h-.043V4.35H71.82v2.417h-.038L69.731 4.35h-1.38l2.33 2.674L68.286 10h1.418l2.078-2.605h.038V10h1.144V7.395h.043L75.085 10h1.44l-2.412-2.997zm5.323-1.82c.811 0 1.359.606 1.386 1.47h-2.825c.059-.853.628-1.47 1.439-1.47zm1.38 3.157c-.155.494-.644.827-1.305.827-.929 0-1.52-.65-1.52-1.632v-.07h3.99v-.398c0-1.713-.977-2.82-2.545-2.82-1.595 0-2.616 1.182-2.616 2.955 0 1.783 1.005 2.905 2.664 2.905 1.295 0 2.272-.735 2.434-1.767h-1.102zM86.687 10h1.155V4.35h-1.155v2.277H84.13V4.35h-1.154V10h1.154V7.54h2.557V10zm3.556 0l2.61-3.97h.043V10h1.144V4.35h-1.144l-2.61 3.958h-.043V4.35h-1.144V10h1.144zm7.186-2.83c-.655 0-1.085-.382-1.085-.919 0-.612.425-.988 1.085-.988h1.026v1.906H97.43zM98.455 10h1.139V4.35H97.37c-1.321 0-2.18.73-2.18 1.906 0 .79.483 1.375 1.267 1.606L94.916 10h1.31l1.37-1.939h.86V10zm8.379-.918h-2.562v-.043c.258-.366.397-.946.44-1.612l.156-2.159h1.966v3.814zm-3.212 2.4V10h4.168v1.482h1.074v-2.4h-.875V4.35h-4.12l-.204 3.029c-.054.763-.242 1.445-.655 1.703h-.457v2.4h1.069zm7.756-4.055l.156-2.159h1.74V10h1.155V4.35h-3.916l-.193 3.029c-.065.983-.258 1.638-.806 1.638-.145 0-.252-.027-.306-.043v1.02c.07.027.204.06.392.06 1.268 0 1.671-1.026 1.778-2.627zm6.44-.258c-.655 0-1.085-.38-1.085-.918 0-.612.424-.988 1.085-.988h1.026v1.906h-1.026zM118.844 10h1.138V4.35h-2.223c-1.321 0-2.181.73-2.181 1.906 0 .79.484 1.375 1.268 1.606L115.304 10h1.311l1.369-1.939h.86V10zM35.598 25.432c.096 2.338 2.012 3.779 4.93 3.779 3.068 0 5.001-1.512 5.001-3.92 0-1.89-1.09-2.953-3.665-3.542l-1.459-.334c-1.555-.37-2.197-.861-2.197-1.705 0-1.055.967-1.758 2.4-1.758 1.45 0 2.443.712 2.548 1.899h2.162c-.052-2.233-1.898-3.745-4.693-3.745-2.76 0-4.72 1.521-4.72 3.771 0 1.81 1.108 2.936 3.446 3.472l1.643.386c1.6.378 2.25.906 2.25 1.82 0 1.054-1.063 1.81-2.593 1.81-1.547 0-2.716-.764-2.856-1.933h-2.197zM47.023 29h2.189v-5.704c0-1.125.738-1.942 1.793-1.942 1.02 0 1.652.641 1.652 1.678V29h2.127v-5.757c0-1.116.72-1.89 1.776-1.89 1.072 0 1.67.65 1.67 1.793V29h2.188v-6.39c0-1.863-1.204-3.102-3.041-3.102-1.345 0-2.452.72-2.9 1.872h-.053c-.343-1.195-1.283-1.872-2.602-1.872-1.265 0-2.25.712-2.654 1.793h-.044v-1.617h-2.1V29zm18.554-1.503c-.95 0-1.582-.483-1.582-1.248 0-.738.607-1.213 1.661-1.283l2.154-.132v.712c0 1.125-.994 1.951-2.233 1.951zm-.659 1.652c1.195 0 2.364-.624 2.9-1.634h.044V29h2.11v-6.416c0-1.872-1.503-3.094-3.815-3.094-2.373 0-3.858 1.248-3.955 2.989h2.03c.141-.774.8-1.275 1.837-1.275 1.081 0 1.74.563 1.74 1.538v.668l-2.46.14c-2.268.141-3.542 1.135-3.542 2.787 0 1.679 1.31 2.812 3.111 2.812zm6.82-.149h2.189v-5.423c0-1.31.747-2.11 1.986-2.11.37 0 .703.053.888.124v-1.978a3.108 3.108 0 00-.686-.088c-1.098 0-1.916.65-2.232 1.785h-.044v-1.626h-2.1V29zm6.794-11.496v2.18h-1.336v1.687h1.336v5.15c0 1.811.791 2.523 2.804 2.523.466 0 .896-.035 1.134-.088v-1.67c-.14.026-.422.044-.624.044-.774 0-1.125-.351-1.125-1.116V21.37h1.757v-1.687h-1.757v-2.18h-2.189zM93.157 29V18.233h3.788v-1.916h-9.843v1.916h3.796V29h2.26zm11.479 0l4.412-12.683h-2.444l-3.216 10.248h-.053l-3.217-10.248h-2.496L102.034 29h2.602z"
              fill="#fff"
            ></path>
          </svg>
        </li>
        <li className="footer__app__item">
          <svg
            width="123"
            height="33"
            viewBox="0 0 123 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.548 2.047A.81.81 0 000 2.815v26.828a.81.81 0 00.54.766l14.252-14.185L.548 2.047z"
              fill="#00D6FF"
            ></path>
            <path
              d="M18.807 12.227L1.22 2.11a.802.802 0 00-.672-.063l14.244 14.178 4.015-3.997z"
              fill="#00F076"
            ></path>
            <path
              d="M1.22 30.349l17.594-10.123-4.022-4.002L.541 30.408a.8.8 0 00.68-.06z"
              fill="#FF3A44"
            ></path>
            <path
              d="M18.814 20.226l5.721-3.291a.814.814 0 000-1.412l-5.727-3.296-4.015 3.997 4.021 4.002z"
              fill="#FFD000"
            ></path>
            <path
              d="M33.04 10.145c1.74 0 2.937-.902 3.27-2.438h-1.208c-.274.864-1.02 1.37-2.058 1.37-1.423 0-2.325-1.145-2.325-2.955 0-1.794.913-2.949 2.32-2.949 1.005 0 1.81.597 2.063 1.515h1.208c-.258-1.547-1.563-2.584-3.27-2.584-2.165 0-3.551 1.563-3.551 4.018 0 2.47 1.375 4.023 3.55 4.023zm6.622-3.142l2.503-2.653h-1.386l-2.213 2.417h-.043V4.35h-1.155V10h1.155V7.395h.043L40.806 10h1.455l-2.6-2.997zm5.167 2.175c-.623 0-1.032-.322-1.032-.816 0-.484.393-.79 1.085-.838l1.391-.086v.446c0 .736-.633 1.294-1.444 1.294zm-.323.919c.742 0 1.456-.398 1.784-1.026h.026V10h1.112V6.106c0-1.133-.875-1.858-2.245-1.858-1.396 0-2.267.752-2.33 1.772h1.095c.102-.505.52-.827 1.192-.827.71 0 1.133.376 1.133 1.004v.435l-1.546.092c-1.343.075-2.1.682-2.1 1.67 0 1.015.773 1.703 1.88 1.703zM53.208 10V4.35h-1.15v2.223c-.236.28-.66.516-1.289.516-.714 0-1.096-.44-1.096-1.144V4.35H48.52v1.68c0 1.236.735 2.047 2.067 2.047.623 0 1.09-.193 1.397-.483h.075V10h1.15zm3.233-.822c-.623 0-1.031-.322-1.031-.816 0-.484.392-.79 1.085-.838l1.39-.086v.446c0 .736-.633 1.294-1.444 1.294zm-.322.919c.74 0 1.455-.398 1.783-1.026h.027V10h1.111V6.106c0-1.133-.875-1.858-2.245-1.858-1.396 0-2.266.752-2.33 1.772h1.095c.102-.505.521-.827 1.192-.827.71 0 1.134.376 1.134 1.004v.435l-1.547.092c-1.343.075-2.1.682-2.1 1.67 0 1.015.773 1.703 1.88 1.703zM61.404 10l2.61-3.97h.043V10h1.144V4.35h-1.144l-2.61 3.958h-.043V4.35H60.26V10h1.144zm-.376-8.132c0 1.015.72 1.703 1.783 1.703 1.069 0 1.789-.688 1.789-1.703h-.785c-.005.607-.392 1.069-1.004 1.069-.607 0-.994-.462-.999-1.069h-.784zm9.716 2.482h-4.7v.918h1.773V10h1.155V5.268h1.772V4.35zm3.11.832c.811 0 1.359.607 1.386 1.472h-2.825c.059-.854.628-1.472 1.439-1.472zm1.38 3.158c-.155.494-.644.827-1.305.827-.929 0-1.52-.65-1.52-1.632v-.07h3.99v-.398c0-1.713-.977-2.82-2.545-2.82-1.595 0-2.616 1.182-2.616 2.955 0 1.783 1.005 2.905 2.664 2.905 1.295 0 2.272-.735 2.433-1.767h-1.1zm6.725-3.147c.564 0 .87.263.87.73 0 .5-.328.752-.983.752h-1.074V5.193h1.187zm-.038 2.293c.763 0 1.14.28 1.14.838 0 .543-.355.833-1.01.833h-1.279v-1.67h1.15zM79.628 10h2.6c1.224 0 1.987-.634 1.987-1.627 0-.71-.484-1.225-1.214-1.322v-.043c.542-.102.961-.633.961-1.219 0-.892-.666-1.44-1.767-1.44h-2.567V10zM40.217 23.709v-1.354h-5.274v1.732h3.059l-.009.21c-.035 1.776-1.362 2.99-3.278 2.99-2.285 0-3.71-1.785-3.71-4.703 0-2.857 1.363-4.553 3.648-4.553 1.556 0 2.734.862 3.164 2.32h2.303c-.413-2.54-2.593-4.245-5.475-4.245-3.666 0-5.96 2.479-5.96 6.504 0 4.087 2.303 6.6 6.003 6.6 3.472 0 5.529-2.065 5.529-5.501zm5.757 5.476c2.733 0 4.508-1.82 4.508-4.843 0-3.015-1.792-4.852-4.508-4.852s-4.51 1.846-4.51 4.852c0 3.023 1.776 4.843 4.51 4.843zm0-1.732c-1.389 0-2.285-1.125-2.285-3.111 0-1.978.905-3.111 2.285-3.111 1.388 0 2.285 1.133 2.285 3.11 0 1.987-.897 3.112-2.285 3.112zm10.037 1.732c2.733 0 4.508-1.82 4.508-4.843 0-3.015-1.792-4.852-4.508-4.852s-4.509 1.846-4.509 4.852c0 3.023 1.775 4.843 4.509 4.843zm0-1.732c-1.389 0-2.285-1.125-2.285-3.111 0-1.978.905-3.111 2.285-3.111 1.388 0 2.285 1.133 2.285 3.11 0 1.987-.897 3.112-2.285 3.112zm10.028-.184c-1.38 0-2.259-1.108-2.259-2.954 0-1.828.88-2.988 2.26-2.988 1.396 0 2.302 1.178 2.302 2.988 0 1.82-.906 2.954-2.303 2.954zm-.009 5.247c2.716 0 4.5-1.442 4.5-3.665v-9.167h-2.144v1.6h-.035c-.537-1.073-1.609-1.759-2.936-1.759-2.382 0-3.876 1.837-3.876 4.782 0 2.9 1.53 4.702 3.832 4.702 1.336 0 2.435-.668 2.918-1.67h.053v1.573c0 1.187-.818 1.986-2.241 1.986-1.037 0-1.837-.483-2.075-1.195h-2.17c.22 1.635 1.871 2.813 4.174 2.813zM72.376 29h2.188V16.317h-2.188V29zm8.068-7.814c1.257 0 2.1.923 2.145 2.242h-4.35c.087-1.301.975-2.242 2.205-2.242zm2.154 5.028c-.238.773-1.011 1.283-2.03 1.283-1.433 0-2.347-1.002-2.347-2.496v-.132h6.512v-.712c0-2.83-1.652-4.667-4.297-4.667-2.69 0-4.395 1.943-4.395 4.887 0 2.97 1.688 4.808 4.482 4.808 2.207 0 3.841-1.213 4.123-2.971h-2.048zm7.374-9.897V29h2.267v-4.192h2.567c2.566 0 4.368-1.714 4.368-4.245 0-2.532-1.75-4.246-4.272-4.246h-4.93zm2.267 1.855h2.066c1.626 0 2.566.87 2.566 2.39 0 1.539-.95 2.418-2.575 2.418h-2.057v-4.808zM100.677 29h2.188V16.317h-2.188V29zm7.453-1.503c-.949 0-1.582-.483-1.582-1.248 0-.738.606-1.213 1.661-1.283l2.153-.132v.712c0 1.125-.993 1.951-2.232 1.951zm-.659 1.652c1.195 0 2.364-.624 2.9-1.634h.044V29h2.109v-6.416c0-1.872-1.503-3.094-3.814-3.094-2.373 0-3.858 1.248-3.955 2.989h2.03c.141-.774.8-1.275 1.837-1.275 1.081 0 1.74.563 1.74 1.538v.668l-2.461.14c-2.267.141-3.542 1.135-3.542 2.787 0 1.679 1.31 2.812 3.112 2.812zm7.822 3.314c2.127 0 3.155-.782 3.955-3.094l3.366-9.685h-2.302l-2.198 7.453h-.035l-2.197-7.453h-2.391l3.314 9.325c.008.026-.123.492-.123.518-.246.862-.712 1.204-1.618 1.204-.131 0-.518-.008-.632-.035v1.732c.114.026.738.035.861.035z"
              fill="#fff"
            ></path>
          </svg>
        </li>

        <li className="footer__app__item">
          <svg
            width="128"
            height="33"
            viewBox="0 0 128 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.857 2C2.103 2 0 4.104 0 9.854v12.292C0 27.894 2.104 30 7.857 30H20.14c5.752 0 7.86-2.104 7.86-7.854V9.854C28 4.106 25.896 2 20.143 2H7.857z"
              fill="#DA0025"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.213 18.24h1.124l-.564-1.311-.56 1.311zm-.277.661l-.333.763h-.759L12.458 16h.657l1.607 3.664h-.778l-.33-.763h-1.678zm12.22.76h.733v-3.66h-.734v3.66zm-2.923-1.572h1.353v-.668h-1.353v-.75h1.965v-.668H20.5v3.661h2.768v-.668h-2.035v-.907zm-2.916.431L17.486 16h-.607l-.833 2.52-.809-2.518h-.792l1.278 3.664h.616l.833-2.407.833 2.408h.622l1.274-3.665h-.77l-.812 2.52-.002-.002zM9.723 18.1c0 .595-.296.914-.833.914-.54 0-.838-.328-.838-.94V16h-.744v2.1c0 1.03.574 1.623 1.572 1.623 1.008 0 1.586-.602 1.586-1.653V16h-.742v2.1l-.001-.001zM5.533 16h.743v3.666h-.742v-1.489h-1.68v1.489h-.742V16h.742v1.479h1.68V16zM14 11.334a4.672 4.672 0 01-4.667-4.667h.658A4.013 4.013 0 0014 10.675a4.013 4.013 0 004.008-4.009h.658A4.672 4.672 0 0114 11.335z"
              fill="#fff"
            ></path>
            <path
              d="M40.12 2.12c-2.235 0-3.631 1.542-3.631 4.007 0 2.466 1.396 4.002 3.63 4.002 2.23 0 3.632-1.536 3.632-4.002 0-2.465-1.402-4.006-3.631-4.006zm0 1.059c1.471 0 2.395 1.138 2.395 2.948 0 1.805-.924 2.944-2.395 2.944-1.472 0-2.401-1.139-2.401-2.944 0-1.81.929-2.948 2.4-2.948zm9.04 1.17h-4.7v.92h1.772V10h1.155V5.268h1.772V4.35zM52.3 7.004l2.503-2.653h-1.386l-2.212 2.417h-.043V4.35h-1.155V10h1.155V7.395h.043L53.446 10H54.9l-2.6-2.997zm6.274-2.745c-.817 0-1.467.414-1.8 1.064h-.021V4.35H55.63v7.52h1.16v-2.8h.027c.323.63.967 1.027 1.778 1.027 1.418 0 2.358-1.134 2.358-2.922 0-1.789-.945-2.917-2.38-2.917zm-.306 4.856c-.892 0-1.483-.763-1.483-1.94 0-1.165.596-1.938 1.483-1.938.918 0 1.493.757 1.493 1.939 0 1.187-.575 1.939-1.493 1.939zm6.117.993c1.617 0 2.68-1.111 2.68-2.932 0-1.816-1.068-2.927-2.68-2.927-1.611 0-2.68 1.111-2.68 2.927 0 1.82 1.063 2.932 2.68 2.932zm0-.956c-.907 0-1.498-.72-1.498-1.976 0-1.252.59-1.971 1.498-1.971s1.499.72 1.499 1.97c0 1.258-.586 1.977-1.499 1.977zM69.21 10l2.61-3.97h.043V10h1.144V4.35h-1.144l-2.61 3.958h-.043V4.35h-1.145V10h1.145zm-.376-8.132c0 1.015.72 1.703 1.783 1.703 1.069 0 1.788-.688 1.788-1.703h-.784c-.005.607-.392 1.069-1.004 1.069-.607 0-.994-.462-1-1.069h-.784zM78.55 4.35h-4.7v.918h1.773V10h1.154V5.268h1.773V4.35zm3.11.832c.81 0 1.359.607 1.385 1.472H80.22c.06-.854.629-1.472 1.44-1.472zm1.38 3.158c-.156.494-.645.827-1.305.827-.93 0-1.52-.65-1.52-1.632v-.07h3.99v-.398c0-1.713-.977-2.82-2.545-2.82-1.596 0-2.616 1.182-2.616 2.955 0 1.783 1.004 2.905 2.664 2.905 1.294 0 2.272-.735 2.433-1.767H83.04zm6.725-3.147c.564 0 .87.263.87.73 0 .5-.328.752-.983.752h-1.074V5.193h1.187zm-.038 2.293c.763 0 1.139.28 1.139.838 0 .543-.355.833-1.01.833h-1.278v-1.67h1.15zM87.434 10h2.6c1.224 0 1.986-.634 1.986-1.627 0-.71-.483-1.225-1.213-1.322v-.043c.542-.102.961-.633.961-1.219 0-.892-.666-1.44-1.767-1.44h-2.567V10zM44.404 29h2.39l-4.5-12.683h-2.557L35.237 29h2.338l1.081-3.278h4.667L44.404 29zM40.96 18.559h.061l1.767 5.414h-3.603l1.775-5.414zm12.094.966c-1.354 0-2.408.686-2.936 1.767h-.044v-1.608h-2.136v12.383h2.189v-4.614h.044c.51 1.046 1.564 1.696 2.918 1.696 2.338 0 3.832-1.837 3.832-4.807 0-2.98-1.503-4.817-3.867-4.817zm-.668 7.831c-1.362 0-2.268-1.186-2.277-3.014.01-1.81.915-3.015 2.277-3.015 1.415 0 2.294 1.178 2.294 3.015 0 1.846-.88 3.014-2.294 3.014zm11.056-7.83c-1.353 0-2.408.685-2.935 1.766h-.044v-1.608h-2.136v12.383h2.189v-4.614h.044c.51 1.046 1.564 1.696 2.918 1.696 2.337 0 3.832-1.837 3.832-4.807 0-2.98-1.503-4.817-3.868-4.817zm-.668 7.83c-1.362 0-2.267-1.186-2.276-3.014.009-1.81.914-3.015 2.276-3.015 1.416 0 2.294 1.178 2.294 3.015 0 1.846-.878 3.014-2.294 3.014zM83.64 23.71v-1.354h-5.274v1.732h3.059l-.009.21c-.035 1.776-1.362 2.99-3.278 2.99-2.285 0-3.71-1.785-3.71-4.703 0-2.857 1.363-4.553 3.648-4.553 1.556 0 2.734.862 3.164 2.32h2.303c-.413-2.54-2.593-4.245-5.476-4.245-3.665 0-5.959 2.479-5.959 6.504 0 4.087 2.303 6.6 6.003 6.6 3.472 0 5.529-2.065 5.529-5.501zm4.983 3.788c-.95 0-1.582-.483-1.582-1.248 0-.738.606-1.213 1.661-1.283l2.154-.132v.712c0 1.125-.994 1.951-2.233 1.951zm-.66 1.652c1.196 0 2.365-.624 2.901-1.634h.044V29h2.11v-6.416c0-1.872-1.503-3.094-3.815-3.094-2.373 0-3.858 1.248-3.955 2.989h2.03c.141-.774.8-1.275 1.837-1.275 1.081 0 1.74.563 1.74 1.538v.668l-2.46.14c-2.268.141-3.542 1.135-3.542 2.787 0 1.679 1.31 2.812 3.11 2.812zM94.846 29h2.188V16.317h-2.188V29zm4.113 0h2.188V16.317h-2.188V29zm8.068-7.814c1.257 0 2.101.923 2.145 2.242h-4.351c.088-1.301.976-2.242 2.206-2.242zm2.154 5.028c-.238.773-1.011 1.283-2.031 1.283-1.432 0-2.346-1.002-2.346-2.496v-.132h6.512v-.712c0-2.83-1.652-4.667-4.297-4.667-2.69 0-4.395 1.943-4.395 4.887 0 2.97 1.688 4.808 4.482 4.808 2.207 0 3.841-1.213 4.123-2.971h-2.048zM112.73 29h2.189v-5.423c0-1.31.747-2.11 1.986-2.11.369 0 .703.053.888.124v-1.978a3.104 3.104 0 00-.686-.088c-1.098 0-1.916.65-2.232 1.785h-.044v-1.626h-2.101V29zm7.225 3.463c2.127 0 3.155-.782 3.955-3.094l3.366-9.685h-2.302l-2.198 7.453h-.035l-2.197-7.453h-2.391l3.314 9.325c.009.026-.123.492-.123.518-.246.862-.712 1.204-1.617 1.204-.132 0-.519-.008-.633-.035v1.732c.114.026.738.035.861.035z"
              fill="#fff"
            ></path>
          </svg>
        </li>
      </ul>
    </div>
  );
}

export default FooterApp;