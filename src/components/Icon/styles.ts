import styled from 'styled-components'

export const StyledIcon = styled.span`
  @charset "UTF-8";

  /* @import url('http://fonts.googleapis.com/css?family=Dosis:400,500,70'); */

  @font-face {
    font-family: 'testfonts';
    src: url('assets/fonts/testfonts.eot');
    src: url('assets/fonts/testfonts.eot?#iefix') format('embedded-opentype'),
      url('assets/fonts/testfonts.woff') format('woff'),
      url('assets/fonts/testfonts.ttf') format('truetype'),
      url('assets/fonts/testfonts.svg#testfonts') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  .icon--size-sm {
    font-size: 0.7rem;
  }
  .icon--size-md {
    font-size: 0.9rem;
  }
  .icon--size-lg {
    font-size: 1.15rem;
  }
  .icon--size-xl {
    font-size: 1.25rem;
  }
  .icon--color-primary {
    color: #1ea7fd;
  }
  .icon--color-secondary {
    color: #1b77b1;
  }
  .icon--color-success {
    color: #1bb173;
  }
  .icon--color-warning {
    color: #d4af09;
  }
  .icon--color-danger {
    color: #c42c2c;
  }

  [data-icon]:before {
    font-family: 'testfonts' !important;
    content: attr(data-icon);
    font-style: normal !important;
    font-weight: normal !important;
    font-variant: normal !important;
    text-transform: none !important;
    speak: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [class^='icon-']:before,
  [class*=' icon-']:before {
    font-family: 'testfonts' !important;
    font-style: normal !important;
    font-weight: normal !important;
    font-variant: normal !important;
    text-transform: none !important;
    speak: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-world-outline:before {
    content: '\61';
  }
  .icon-bell:before {
    content: '\62';
  }
  .icon-bell-outline:before {
    content: '\63';
  }
  .icon-plus-circle:before {
    content: '\65';
  }
  .icon-plus-circle-outline:before {
    content: '\66';
  }
  .icon-search-thin:before {
    content: '\67';
  }
  .icon-search-thick:before {
    content: '\68';
  }
  .icon-search-minus:before {
    content: '\69';
  }
  .icon-search-plus:before {
    content: '\6a';
  }
  .icon-language:before {
    content: '\6b';
  }
  .icon-arrow-left:before {
    content: '\6c';
  }
  .icon-arrow-down:before {
    content: '\6d';
  }
  .icon-arrow-right:before {
    content: '\6e';
  }
  .icon-arrow-up:before {
    content: '\6f';
  }
  .icon-chevron-down:before {
    content: '\70';
  }
  .icon-chevron-left:before {
    content: '\71';
  }
  .icon-chevron-right:before {
    content: '\72';
  }
  .icon-chevron-left-thin:before {
    content: '\75';
  }
  .icon-chevron-right-thin:before {
    content: '\76';
  }
  .icon-chevron-up-thin:before {
    content: '\77';
  }
  .icon-arrow-down-thin:before {
    content: '\78';
  }
  .icon-arrow-left-thin:before {
    content: '\79';
  }
  .icon-arrow-right-thin:before {
    content: '\7a';
  }
  .icon-arrow-up-thin:before {
    content: '\41';
  }
  .icon-arrow-dropdown:before {
    content: '\42';
  }
  .icon-arrow-dropleft:before {
    content: '\43';
  }
  .icon-arrow-dropup:before {
    content: '\44';
  }
  .icon-user:before {
    content: '\49';
  }
  .icon-user-outline:before {
    content: '\4a';
  }
  .icon-user-circle:before {
    content: '\4b';
  }
  .icon-user-circle-outline:before {
    content: '\4c';
  }
  .icon-user-add:before {
    content: '\4d';
  }
  .icon-user-add-outline:before {
    content: '\4e';
  }
  .icon-group:before {
    content: '\4f';
  }
  .icon-group-outlined:before {
    content: '\50';
  }
  .icon-star:before {
    content: '\52';
  }
  .icon-star-outline:before {
    content: '\53';
  }
  .icon-bookmark:before {
    content: '\54';
  }
  .icon-bookmark-outline:before {
    content: '\55';
  }
  .icon-clipboard:before {
    content: '\56';
  }
  .icon-clipboard-outline:before {
    content: '\57';
  }
  .icon-file:before {
    content: '\58';
  }
  .icon-file-outline:before {
    content: '\59';
  }
  .icon-files:before {
    content: '\5a';
  }
  .icon-files-outline:before {
    content: '\30';
  }
  .icon-claim:before {
    content: '\31';
  }
  .icon-claim-outline:before {
    content: '\32';
  }
  .icon-file-settings:before {
    content: '\33';
  }
  .icon-file-settings-outline:before {
    content: '\34';
  }
  .icon-file-add:before {
    content: '\35';
  }
  .icon-file-add-outline:before {
    content: '\36';
  }
  .icon-home:before {
    content: '\37';
  }
  .icon-home-outline:before {
    content: '\38';
  }
  .icon-vertical-dots:before {
    content: '\24';
  }
  .icon-list:before {
    content: '\25';
  }
  .icon-burger-menu:before {
    content: '\26';
  }
  .icon-grid-view-blocks:before {
    content: '\27';
  }
  .icon-options:before {
    content: '\28';
  }
  .icon-open-drawer:before {
    content: '\29';
  }
  .icon-calendar:before {
    content: '\39';
  }
  .icon-phone-number:before {
    content: '\21';
  }
  .icon-calendar-check:before {
    content: '\22';
  }
  .icon-reservation-outline:before {
    content: '\23';
  }
  .icon-filter:before {
    content: '\2a';
  }
  .icon-filter-outline:before {
    content: '\2b';
  }
  .icon-delete:before {
    content: '\2c';
  }
  .icon-delete-outline:before {
    content: '\2d';
  }
  .icon-close-circle:before {
    content: '\2e';
  }
  .icon-close-circle-outline:before {
    content: '\2f';
  }
  .icon-close:before {
    content: '\3a';
  }
  .icon-close-arrow:before {
    content: '\3b';
  }
  .icon-close-arrow-outline:before {
    content: '\3c';
  }
  .icon-check:before {
    content: '\3d';
  }
  .icon-success:before {
    content: '\3e';
  }
  .icon-success-outline:before {
    content: '\3f';
  }
  .icon-success-outlined:before {
    content: '\40';
  }
  .icon-minus:before {
    content: '\5b';
  }
  .icon-clipboard-pencil-outline:before {
    content: '\5e';
  }
  .icon-chat-bubble:before {
    content: '\5f';
  }
  .icon-chat-bubble-outline:before {
    content: '\60';
  }
  .icon-chat-bubble-box:before {
    content: '\7b';
  }
  .icon-chat-bubble-box-outline:before {
    content: '\7c';
  }
  .icon-dashboard:before {
    content: '\7d';
  }
  .icon-dashboard-outline:before {
    content: '\7e';
  }
  .icon-car:before {
    content: '\5c';
  }
  .icon-cart:before {
    content: '\e000';
  }
  .icon-cart-outline:before {
    content: '\e001';
  }
  .icon-card-id:before {
    content: '\e002';
  }
  .icon-card-id-outline:before {
    content: '\e003';
  }
  .icon-card-atm:before {
    content: '\e004';
  }
  .icon-location:before {
    content: '\e007';
  }
  .icon-location-outline:before {
    content: '\e008';
  }
  .icon-location-favorite:before {
    content: '\e009';
  }
  .icon-location-favorite-outline:before {
    content: '\e00a';
  }
  .icon-pin:before {
    content: '\e00b';
  }
  .icon-pin-outline:before {
    content: '\e00c';
  }
  .icon-new-window:before {
    content: '\e00d';
  }
  .icon-new-window-outline:before {
    content: '\e00e';
  }
  .icon-shuffle:before {
    content: '\e00f';
  }
  .icon-shuffle-thin:before {
    content: '\e010';
  }
  .icon-arrow-swap:before {
    content: '\e011';
  }
  .icon-arrow-swap-thin:before {
    content: '\e012';
  }
  .icon-arrow-dropdown-circle:before {
    content: '\45';
  }
  .icon-arrow-dropleft-circle:before {
    content: '\46';
  }
  .icon-arrow-dropright-circle:before {
    content: '\47';
  }
  .icon-arrow-dropup-circle:before {
    content: '\48';
  }
  .icon-arrow-dropdown-circle-outline:before {
    content: '\e013';
  }
  .icon-arrow-dropleft-circle-outline:before {
    content: '\e014';
  }
  .icon-arrow-dropright-circle-outline:before {
    content: '\e015';
  }
  .icon-error:before {
    content: '\e017';
  }
  .icon-error-outline:before {
    content: '\e018';
  }
  .icon-help:before {
    content: '\e019';
  }
  .icon-help-outline:before {
    content: '\e01a';
  }
  .icon-info:before {
    content: '\e01b';
  }
  .icon-minus-circle:before {
    content: '\e01d';
  }
  .icon-minus-circle-outline:before {
    content: '\e01e';
  }
  .icon-warning-02:before {
    content: '\e01f';
  }
  .icon-warning-01:before {
    content: '\e020';
  }
  .icon-users:before {
    content: '\51';
  }
  .icon-users-outline:before {
    content: '\e021';
  }
  .icon-reload:before {
    content: '\e022';
  }
  .icon-reload-thin:before {
    content: '\e023';
  }
  .icon-chevron-double-down:before {
    content: '\e024';
  }
  .icon-chevron-double-left:before {
    content: '\e025';
  }
  .icon-chevron-double-right:before {
    content: '\e026';
  }
  .icon-chevron-double-up:before {
    content: '\e027';
  }
  .icon-settings:before {
    content: '\e028';
  }
  .icon-settings-outline:before {
    content: '\e029';
  }
  .icon-setting-wrench:before {
    content: '\e02a';
  }
  .icon-image:before {
    content: '\e02b';
  }
  .icon-image-outline:before {
    content: '\e02c';
  }
  .icon-login-1:before {
    content: '\e02d';
  }
  .icon-login:before {
    content: '\e02e';
  }
  .icon-logout-1:before {
    content: '\e02f';
  }
  .icon-logout:before {
    content: '\e030';
  }
  .icon-download:before {
    content: '\e005';
  }
  .icon-download-outline:before {
    content: '\e006';
  }
  .icon-upload:before {
    content: '\e031';
  }
  .icon-upload-outline:before {
    content: '\e032';
  }
  .icon-folder-close:before {
    content: '\e033';
  }
  .icon-folder-close-outline:before {
    content: '\e034';
  }
  .icon-envelope:before {
    content: '\e035';
  }
  .icon-envelope-outline:before {
    content: '\e036';
  }
  .icon-plane:before {
    content: '\e037';
  }
  .icon-plane-outline:before {
    content: '\e038';
  }
  .icon-airplane:before {
    content: '\e039';
  }
  .icon-airplane-oultine:before {
    content: '\e03a';
  }
  .icon-building:before {
    content: '\e03b';
  }
  .icon-building-outline:before {
    content: '\e03c';
  }
  .icon-banknote:before {
    content: '\e03e';
  }
  .icon-dollar-sign:before {
    content: '\e03f';
  }
  .icon-ban:before {
    content: '\e03d';
  }
  .icon-spinner:before {
    content: '\e041';
  }
  .icon-social-facebook-rounded:before {
    content: '\e042';
  }
  .icon-social-facebook-rounded-outline:before {
    content: '\e043';
  }
  .icon-social-linkedin:before {
    content: '\e044';
  }
  .icon-social-instagram:before {
    content: '\e045';
  }
  .icon-social-dribble:before {
    content: '\e046';
  }
  .icon-social-pinterest:before {
    content: '\e047';
  }
  .icon-social-twitter:before {
    content: '\e048';
  }
  .icon-circle:before {
    content: '\e049';
  }
  .icon-circle-outline:before {
    content: '\e04a';
  }
  .icon-search-jobs:before {
    content: '\e04b';
  }
  .icon-phone:before {
    content: '\e04c';
  }
  .icon-money:before {
    content: '\e04e';
  }
  .icon-arrow-swap-1:before {
    content: '\e04f';
  }
  .icon-folder-open:before {
    content: '\e050';
  }
  .icon-folder-open-outline:before {
    content: '\e051';
  }
  .icon-lock:before {
    content: '\e040';
  }
  .icon-lock-outline:before {
    content: '\e04d';
  }
  .icon-policy-number:before {
    content: '\e053';
  }
  .icon-product:before {
    content: '\e054';
  }
  .icon-state:before {
    content: '\e055';
  }
  .icon-tracking-number:before {
    content: '\e056';
  }
  .icon-upc:before {
    content: '\e057';
  }
  .icon-warranty-replacement-report:before {
    content: '\e058';
  }
  .icon-drivers-license:before {
    content: '\e05a';
  }
  .icon-risk-level-old:before {
    content: '\e05c';
  }
  .icon-tier:before {
    content: '\e05d';
  }
  .icon-info-outline:before {
    content: '\e01c';
  }
  .icon-job-title:before {
    content: '\e05b';
  }
  .icon-street:before {
    content: '\e05e';
  }
  .icon-city:before {
    content: '\e05f';
  }
  .icon-zip-code:before {
    content: '\e060';
  }
  .icon-country:before {
    content: '\e059';
  }
  .icon-image-placeholder:before {
    content: '\e061';
  }
  .icon-vehicle-class:before {
    content: '\e062';
  }
  .icon-vehicle-category:before {
    content: '\e063';
  }
  .icon-vehicle-make-model:before {
    content: '\e064';
  }
  .icon-plus:before {
    content: '\64';
  }
  .icon-pencil:before {
    content: '\e065';
  }
  .icon-region:before {
    content: '\5d';
  }
  .icon-location-manager:before {
    content: '\e066';
  }
  .icon-corporate-manager:before {
    content: '\e067';
  }
  .icon-regional-manager:before {
    content: '\e068';
  }
  .icon-nearby-counter:before {
    content: '\e069';
  }
  .icon-category:before {
    content: '\e06b';
  }
  .icon-class:before {
    content: '\e06c';
  }
  .icon-counter:before {
    content: '\e06d';
  }
  .icon-exterior-color:before {
    content: '\e06e';
  }
  .icon-interior-color:before {
    content: '\e06f';
  }
  .icon-lot:before {
    content: '\e070';
  }
  .icon-make:before {
    content: '\e071';
  }
  .icon-license-state:before {
    content: '\e072';
  }
  .icon-model:before {
    content: '\e073';
  }
  .icon-odometer:before {
    content: '\e074';
  }
  .icon-year:before {
    content: '\e075';
  }
  .icon-trim:before {
    content: '\e077';
  }
  .icon-chevron-down-thin:before {
    content: '\73';
  }
  .icon-arrow-dropup-circle-outline:before {
    content: '\e078';
  }
  .icon-chevron-down-thin2:before {
    content: '\e079';
  }
  .icon-partner-old:before {
    content: '\74';
  }
  .icon-risk-level:before {
    content: '\e016';
  }
  .icon-partner:before {
    content: '\e076';
  }
  .icon-group-by:before {
    content: '\e07a';
  }
  .icon-order-by:before {
    content: '\e07b';
  }
  .icon-text-field:before {
    content: '\e07c';
  }
  .icon-sort-by:before {
    content: '\e07d';
  }
  .icon-insurance-company:before {
    content: '\e07e';
  }
  .icon-insured-name:before {
    content: '\e07f';
  }
  .icon-policy-number-1:before {
    content: '\e080';
  }
  .icon-claim-hotline:before {
    content: '\e081';
  }
  .icon-corporate-id:before {
    content: '\e083';
  }
  .icon-local-contact:before {
    content: '\e084';
  }
  .icon-apartment:before {
    content: '\e052';
  }
  .icon-local-contact-1:before {
    content: '\e085';
  }
  .icon-corporate-id-1:before {
    content: '\e086';
  }
  .icon-vehicle-attribute:before {
    content: '\e088';
  }
  .icon-vin:before {
    content: '\e089';
  }
  .icon-counter-type-04:before {
    content: '\e06a';
  }
  .icon-label:before {
    content: '\e087';
  }
  .icon-tags:before {
    content: '\e087';
  }
  .icon-time:before {
    content: '\e08a';
  }
  .icon-method:before {
    content: '\e08b';
  }
  .icon-category-1:before {
    content: '\e08c';
  }
  .icon-type:before {
    content: '\e08d';
  }
  .icon-guest:before {
    content: '\e08e';
  }
  .icon-save-close:before {
    content: '\e08f';
  }
  .icon-save-continue:before {
    content: '\e090';
  }
  .icon-save-new:before {
    content: '\e091';
  }
  .icon-registration-state:before {
    content: '\e082';
  }
  .icon-add-ons:before {
    content: '\e092';
  }
  .icon-hand-shake:before {
    content: '\e093';
  }
  .icon-user-clock:before {
    content: '\e094';
  }
  .icon-normal-approval:before {
    content: '\e095';
  }
  .icon-exceptional-approval:before {
    content: '\e096';
  }
  .icon-booking:before {
    content: '\e097';
  }
  .icon-booking-planner:before {
    content: '\e098';
  }
  .icon-calendar-days:before {
    content: '\e099';
  }
  .icon-booking-type:before {
    content: '\e09a';
  }
  .icon-fee-templates:before {
    content: '\e09b';
  }
  .icon-payment-method:before {
    content: '\e09c';
  }
  .icon-fee-ratio:before {
    content: '\e09d';
  }
  .icon-fee-rate:before {
    content: '\e09e';
  }
  .icon-template-name:before {
    content: '\e09f';
  }
  .icon-receive-vendor:before {
    content: '\e0a0';
  }
  .icon-display-as:before {
    content: '\e0a1';
  }
  .icon-fee-type:before {
    content: '\e0a2';
  }
  .icon-search-file:before {
    content: '\e0a3';
  }
  .icon-payment-type:before {
    content: '\e0a4';
  }
`
