// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === 'dark' ? logoDark : logo} alt="Berry" width="100" />
     *
     */
     <svg xmlns="http://www.w3.org/2000/svg" fill="black" width="92" height="32">
     <path  d="M 28.238281 20.144531 L 25.394531 17.292969 L 25.394531 1 C 25.394531 0.726562 25.171875 0.5 24.898438 0.5 L 4.980469 0.5 C 4.707031 0.5 4.480469 0.726562 4.480469 1 L 4.480469 28 C 4.480469 28.273438 4.707031 28.5 4.980469 28.5 L 19.417969 28.5 L 19.417969 31 C 19.417969 31.273438 19.644531 31.5 19.917969 31.5 L 24.898438 31.5 C 25.171875 31.5 25.394531 31.273438 25.394531 31 L 25.394531 29.707031 L 28.238281 26.847656 C 28.332031 26.753906 28.382812 26.628906 28.382812 26.492188 L 28.382812 20.492188 C 28.382812 20.367188 28.332031 20.238281 28.238281 20.144531 Z M 19.417969 20.5 L 19.417969 27.5 L 5.476562 27.5 L 5.476562 1.5 L 24.398438 1.5 L 24.398438 23.5 L 23.902344 23.5 C 23.628906 23.5 23.402344 23.273438 23.402344 23 L 23.402344 20.5 C 23.402344 19.398438 22.507812 18.5 21.410156 18.5 C 20.316406 18.5 19.417969 19.398438 19.417969 20.5 Z M 27.386719 26.292969 L 24.542969 29.148438 C 24.449219 29.242188 24.398438 29.367188 24.398438 29.503906 L 24.398438 30.503906 L 20.414062 30.503906 L 20.414062 20.5 C 20.414062 19.949219 20.863281 19.5 21.410156 19.5 C 21.960938 19.5 22.40625 19.949219 22.40625 20.5 L 22.40625 23 C 22.40625 23.824219 23.078125 24.5 23.902344 24.5 L 24.898438 24.5 C 25.171875 24.5 25.394531 24.273438 25.394531 24 L 25.394531 18.707031 L 27.386719 20.707031 Z M 27.386719 26.292969 "/>
     <path  d="M 22.898438 15.5 C 23.171875 15.5 23.398438 15.273438 23.398438 15 L 23.398438 3 C 23.398438 2.726562 23.171875 2.5 22.898438 2.5 L 6.964844 2.5 C 6.691406 2.5 6.46875 2.726562 6.46875 3 L 6.46875 15 C 6.46875 15.273438 6.691406 15.5 6.964844 15.5 Z M 7.460938 3.5 L 22.402344 3.5 L 22.402344 14.5 L 7.460938 14.5 Z M 7.460938 3.5 "/>
     <path  d="M 6.972656 16.75 L 22.90625 16.75 L 22.90625 17.75 L 6.972656 17.75 Z M 6.972656 16.75 "/>
     <path  d="M 6.972656 19.332031 L 18.421875 19.332031 L 18.421875 20.332031 L 6.972656 20.332031 Z M 6.972656 19.332031 "/>
     <path  d="M 6.972656 21.917969 L 18.421875 21.917969 L 18.421875 22.917969 L 6.972656 22.917969 Z M 6.972656 21.917969 "/>
     <path  d="M 6.972656 24.5 L 18.421875 24.5 L 18.421875 25.5 L 6.972656 25.5 Z M 6.972656 24.5 "/>
     <path  d="M 8.84375 9.320312 C 8.8125 9.320312 8.78125 9.308594 8.765625 9.28125 C 8.738281 9.257812 8.726562 9.230469 8.726562 9.195312 L 8.726562 8.851562 C 8.726562 8.800781 8.738281 8.761719 8.757812 8.730469 C 8.777344 8.699219 8.792969 8.683594 8.800781 8.667969 L 10.507812 6.457031 L 8.894531 6.457031 C 8.855469 6.457031 8.832031 6.445312 8.808594 6.417969 C 8.789062 6.394531 8.777344 6.371094 8.777344 6.339844 L 8.777344 6 C 8.777344 5.964844 8.789062 5.9375 8.808594 5.914062 C 8.824219 5.886719 8.855469 5.875 8.894531 5.875 L 11.234375 5.875 C 11.273438 5.875 11.296875 5.886719 11.320312 5.914062 C 11.347656 5.9375 11.359375 5.964844 11.359375 6 L 11.359375 6.339844 C 11.359375 6.375 11.351562 6.414062 11.339844 6.4375 C 11.328125 6.464844 11.316406 6.488281 11.296875 6.511719 L 9.628906 8.738281 L 11.296875 8.738281 C 11.335938 8.738281 11.359375 8.75 11.382812 8.777344 C 11.410156 8.800781 11.421875 8.824219 11.421875 8.863281 L 11.421875 9.207031 C 11.421875 9.238281 11.410156 9.269531 11.382812 9.289062 C 11.359375 9.3125 11.335938 9.324219 11.296875 9.324219 L 8.84375 9.324219 Z M 8.84375 9.320312 "/>
     <path  d="M 12.09375 9.320312 C 12.0625 9.320312 12.03125 9.308594 12.011719 9.28125 C 11.988281 9.257812 11.976562 9.230469 11.976562 9.199219 L 11.976562 6 C 11.976562 5.964844 11.988281 5.9375 12.011719 5.914062 C 12.039062 5.886719 12.0625 5.875 12.09375 5.875 L 14.246094 5.875 C 14.285156 5.875 14.308594 5.886719 14.335938 5.914062 C 14.359375 5.9375 14.371094 5.964844 14.371094 6 L 14.371094 6.324219 C 14.371094 6.355469 14.359375 6.386719 14.335938 6.40625 C 14.308594 6.433594 14.285156 6.445312 14.246094 6.445312 L 12.636719 6.445312 L 12.636719 7.3125 L 14.140625 7.3125 C 14.179688 7.3125 14.203125 7.324219 14.230469 7.34375 C 14.253906 7.363281 14.265625 7.394531 14.265625 7.433594 L 14.265625 7.738281 C 14.265625 7.777344 14.253906 7.800781 14.230469 7.824219 C 14.203125 7.84375 14.179688 7.855469 14.140625 7.855469 L 12.636719 7.855469 L 12.636719 8.757812 L 14.285156 8.757812 C 14.320312 8.757812 14.347656 8.769531 14.371094 8.792969 C 14.398438 8.820312 14.410156 8.84375 14.410156 8.882812 L 14.410156 9.207031 C 14.410156 9.238281 14.398438 9.269531 14.371094 9.289062 C 14.347656 9.3125 14.320312 9.324219 14.285156 9.324219 L 12.09375 9.324219 Z M 12.09375 9.320312 "/>
     <path  d="M 15.136719 9.320312 C 15.105469 9.320312 15.074219 9.308594 15.054688 9.28125 C 15.03125 9.257812 15.019531 9.230469 15.019531 9.199219 L 15.019531 6 C 15.019531 5.964844 15.03125 5.9375 15.054688 5.914062 C 15.082031 5.886719 15.105469 5.875 15.136719 5.875 L 16.40625 5.875 C 16.800781 5.875 17.117188 5.96875 17.339844 6.152344 C 17.570312 6.332031 17.683594 6.601562 17.683594 6.949219 C 17.683594 7.195312 17.621094 7.394531 17.503906 7.558594 C 17.382812 7.71875 17.222656 7.832031 17.023438 7.90625 L 17.738281 9.164062 C 17.75 9.183594 17.75 9.199219 17.75 9.21875 C 17.75 9.25 17.738281 9.277344 17.71875 9.292969 C 17.703125 9.3125 17.675781 9.324219 17.652344 9.324219 L 17.203125 9.324219 C 17.148438 9.324219 17.105469 9.3125 17.078125 9.28125 C 17.046875 9.25 17.03125 9.226562 17.011719 9.195312 L 16.375 8.03125 L 15.699219 8.03125 L 15.699219 9.214844 C 15.699219 9.246094 15.683594 9.277344 15.667969 9.292969 C 15.648438 9.320312 15.617188 9.332031 15.578125 9.332031 L 15.136719 9.332031 Z M 15.703125 7.46875 L 16.394531 7.46875 C 16.59375 7.46875 16.742188 7.425781 16.84375 7.332031 C 16.941406 7.246094 16.992188 7.113281 16.992188 6.949219 C 16.992188 6.789062 16.941406 6.65625 16.847656 6.5625 C 16.753906 6.46875 16.605469 6.425781 16.402344 6.425781 L 15.710938 6.425781 L 15.710938 7.46875 Z M 15.703125 7.46875 "/>
     <path  d="M 19.625 9.371094 C 19.332031 9.371094 19.082031 9.320312 18.878906 9.226562 C 18.667969 9.132812 18.503906 8.980469 18.386719 8.777344 C 18.269531 8.574219 18.207031 8.320312 18.191406 8.019531 C 18.1875 7.875 18.1875 7.738281 18.1875 7.601562 C 18.1875 7.464844 18.1875 7.320312 18.191406 7.175781 C 18.207031 6.875 18.269531 6.625 18.386719 6.425781 C 18.503906 6.226562 18.671875 6.074219 18.882812 5.976562 C 19.097656 5.875 19.339844 5.824219 19.617188 5.824219 C 19.898438 5.824219 20.148438 5.875 20.359375 5.976562 C 20.570312 6.074219 20.738281 6.226562 20.855469 6.425781 C 20.976562 6.625 21.042969 6.875 21.050781 7.175781 C 21.054688 7.320312 21.0625 7.464844 21.0625 7.601562 C 21.0625 7.738281 21.054688 7.875 21.050781 8.019531 C 21.039062 8.320312 20.976562 8.574219 20.855469 8.777344 C 20.738281 8.976562 20.578125 9.125 20.367188 9.226562 C 20.167969 9.320312 19.917969 9.371094 19.625 9.371094 Z M 19.625 8.808594 C 19.835938 8.808594 20.011719 8.746094 20.140625 8.621094 C 20.277344 8.496094 20.347656 8.289062 20.359375 8 C 20.367188 7.855469 20.371094 7.726562 20.371094 7.601562 C 20.371094 7.476562 20.367188 7.34375 20.359375 7.207031 C 20.351562 7.019531 20.316406 6.863281 20.253906 6.746094 C 20.191406 6.625 20.105469 6.539062 20 6.480469 C 19.890625 6.425781 19.769531 6.402344 19.625 6.402344 C 19.488281 6.402344 19.363281 6.425781 19.257812 6.480469 C 19.152344 6.539062 19.066406 6.625 19.003906 6.746094 C 18.941406 6.863281 18.902344 7.019531 18.898438 7.207031 C 18.890625 7.351562 18.890625 7.480469 18.890625 7.601562 C 18.890625 7.726562 18.890625 7.855469 18.898438 8 C 18.910156 8.289062 18.976562 8.496094 19.113281 8.621094 C 19.246094 8.738281 19.417969 8.808594 19.625 8.808594 Z M 19.625 8.808594 "/>
     <path  d="M 33.0625 28.738281 C 32.925781 28.738281 32.808594 28.6875 32.714844 28.59375 C 32.621094 28.5 32.570312 28.375 32.570312 28.222656 L 32.570312 26.78125 C 32.570312 26.574219 32.613281 26.410156 32.695312 26.285156 C 32.777344 26.160156 32.839844 26.074219 32.882812 26.019531 L 40.027344 16.738281 L 33.269531 16.738281 C 33.117188 16.738281 33 16.6875 32.90625 16.59375 C 32.820312 16.5 32.777344 16.382812 32.777344 16.242188 L 32.777344 14.820312 C 32.777344 14.667969 32.820312 14.542969 32.90625 14.449219 C 32.996094 14.355469 33.117188 14.304688 33.269531 14.304688 L 43.082031 14.304688 C 43.234375 14.304688 43.359375 14.355469 43.453125 14.449219 C 43.542969 14.542969 43.59375 14.667969 43.59375 14.820312 L 43.59375 16.242188 C 43.59375 16.40625 43.570312 16.542969 43.511719 16.65625 C 43.457031 16.769531 43.394531 16.867188 43.328125 16.960938 L 36.332031 26.28125 L 43.3125 26.28125 C 43.464844 26.28125 43.589844 26.332031 43.679688 26.425781 C 43.773438 26.519531 43.824219 26.644531 43.824219 26.792969 L 43.824219 28.238281 C 43.824219 28.375 43.773438 28.492188 43.679688 28.585938 C 43.589844 28.679688 43.464844 28.730469 43.3125 28.730469 L 33.0625 28.730469 Z M 33.0625 28.738281 "/>
     <path  d="M 46.699219 28.738281 C 46.5625 28.738281 46.445312 28.6875 46.351562 28.59375 C 46.257812 28.5 46.207031 28.378906 46.207031 28.242188 L 46.207031 14.820312 C 46.207031 14.667969 46.257812 14.542969 46.351562 14.449219 C 46.445312 14.355469 46.5625 14.304688 46.699219 14.304688 L 55.738281 14.304688 C 55.886719 14.304688 56.011719 14.355469 56.105469 14.449219 C 56.199219 14.542969 56.25 14.667969 56.25 14.820312 L 56.25 16.179688 C 56.25 16.320312 56.199219 16.4375 56.105469 16.53125 C 56.011719 16.625 55.886719 16.675781 55.738281 16.675781 L 48.976562 16.675781 L 48.976562 20.324219 L 55.285156 20.324219 C 55.433594 20.324219 55.558594 20.367188 55.652344 20.457031 C 55.742188 20.542969 55.792969 20.667969 55.792969 20.820312 L 55.792969 22.097656 C 55.792969 22.25 55.742188 22.367188 55.652344 22.460938 C 55.558594 22.550781 55.433594 22.59375 55.285156 22.59375 L 48.976562 22.59375 L 48.976562 26.367188 L 55.898438 26.367188 C 56.050781 26.367188 56.171875 26.417969 56.265625 26.511719 C 56.359375 26.605469 56.410156 26.730469 56.410156 26.878906 L 56.410156 28.242188 C 56.410156 28.378906 56.359375 28.5 56.265625 28.59375 C 56.171875 28.6875 56.050781 28.738281 55.898438 28.738281 Z M 46.699219 28.738281 "/>
     <path  d="M 59.472656 28.738281 C 59.335938 28.738281 59.21875 28.6875 59.125 28.59375 C 59.03125 28.5 58.980469 28.378906 58.980469 28.242188 L 58.980469 14.820312 C 58.980469 14.667969 59.03125 14.542969 59.125 14.449219 C 59.21875 14.355469 59.335938 14.304688 59.472656 14.304688 L 64.789062 14.304688 C 66.445312 14.304688 67.75 14.695312 68.710938 15.460938 C 69.667969 16.230469 70.148438 17.351562 70.148438 18.824219 C 70.148438 19.84375 69.898438 20.6875 69.398438 21.363281 C 68.902344 22.035156 68.230469 22.523438 67.394531 22.824219 L 70.394531 28.082031 C 70.4375 28.160156 70.457031 28.238281 70.457031 28.304688 C 70.457031 28.429688 70.414062 28.53125 70.328125 28.613281 C 70.238281 28.691406 70.140625 28.738281 70.027344 28.738281 L 68.160156 28.738281 C 67.929688 28.738281 67.75 28.675781 67.625 28.550781 C 67.5 28.425781 67.40625 28.300781 67.339844 28.179688 L 64.6875 23.292969 L 61.832031 23.292969 L 61.832031 28.242188 C 61.832031 28.378906 61.789062 28.5 61.699219 28.59375 C 61.613281 28.6875 61.488281 28.738281 61.339844 28.738281 Z M 61.832031 20.960938 L 64.726562 20.960938 C 65.558594 20.960938 66.183594 20.773438 66.59375 20.394531 C 67.003906 20.019531 67.210938 19.480469 67.210938 18.792969 C 67.210938 18.105469 67.011719 17.570312 66.605469 17.175781 C 66.199219 16.78125 65.570312 16.585938 64.726562 16.585938 L 61.832031 16.585938 Z M 61.832031 20.960938 "/>
     <path  d="M 78.28125 28.941406 C 77.0625 28.941406 76.015625 28.742188 75.136719 28.335938 C 74.261719 27.929688 73.578125 27.304688 73.085938 26.460938 C 72.59375 25.617188 72.324219 24.5625 72.28125 23.300781 C 72.269531 22.707031 72.261719 22.125 72.261719 21.550781 C 72.261719 20.976562 72.269531 20.382812 72.28125 19.773438 C 72.324219 18.523438 72.597656 17.480469 73.101562 16.644531 C 73.609375 15.804688 74.304688 15.175781 75.1875 14.742188 C 76.070312 14.320312 77.097656 14.105469 78.28125 14.105469 C 79.457031 14.105469 80.492188 14.320312 81.382812 14.742188 C 82.273438 15.167969 82.96875 15.800781 83.480469 16.644531 C 83.984375 17.480469 84.257812 18.523438 84.300781 19.773438 C 84.324219 20.382812 84.34375 20.96875 84.34375 21.550781 C 84.34375 22.125 84.332031 22.710938 84.300781 23.300781 C 84.257812 24.5625 83.996094 25.617188 83.496094 26.460938 C 83 27.304688 82.316406 27.929688 81.429688 28.335938 C 80.546875 28.738281 79.5 28.941406 78.28125 28.941406 Z M 78.28125 26.566406 C 79.171875 26.566406 79.898438 26.304688 80.460938 25.773438 C 81.019531 25.242188 81.324219 24.378906 81.363281 23.1875 C 81.386719 22.582031 81.40625 22.023438 81.40625 21.507812 C 81.40625 20.988281 81.394531 20.4375 81.363281 19.84375 C 81.339844 19.042969 81.1875 18.398438 80.921875 17.894531 C 80.652344 17.394531 80.292969 17.023438 79.84375 16.800781 C 79.390625 16.574219 78.875 16.460938 78.28125 16.460938 C 77.710938 16.460938 77.191406 16.574219 76.746094 16.800781 C 76.289062 17.023438 75.933594 17.394531 75.667969 17.894531 C 75.398438 18.394531 75.25 19.042969 75.226562 19.84375 C 75.214844 20.4375 75.207031 20.988281 75.207031 21.507812 C 75.207031 22.023438 75.214844 22.582031 75.226562 23.1875 C 75.269531 24.378906 75.566406 25.242188 76.128906 25.773438 C 76.6875 26.304688 77.402344 26.566406 78.28125 26.566406 Z M 78.28125 26.566406 "/>
     <path  d="M 32.988281 11.6875 C 32.90625 11.6875 32.839844 11.664062 32.789062 11.613281 C 32.738281 11.5625 32.714844 11.492188 32.714844 11.414062 L 32.714844 3.199219 C 32.714844 3.105469 32.738281 3.039062 32.789062 2.988281 C 32.839844 2.9375 32.90625 2.914062 32.988281 2.914062 L 36.242188 2.914062 C 36.828125 2.914062 37.300781 3.019531 37.675781 3.226562 C 38.042969 3.433594 38.316406 3.707031 38.492188 4.042969 C 38.664062 4.382812 38.75 4.75 38.75 5.152344 C 38.75 5.507812 38.695312 5.820312 38.582031 6.070312 C 38.472656 6.324219 38.328125 6.53125 38.160156 6.6875 C 37.992188 6.84375 37.824219 6.96875 37.65625 7.050781 C 37.988281 7.21875 38.285156 7.488281 38.539062 7.851562 C 38.796875 8.21875 38.925781 8.664062 38.925781 9.195312 C 38.925781 9.613281 38.828125 10.011719 38.632812 10.386719 C 38.441406 10.769531 38.148438 11.074219 37.761719 11.3125 C 37.375 11.550781 36.898438 11.667969 36.332031 11.667969 L 32.988281 11.667969 Z M 33.5 6.71875 L 36.082031 6.71875 C 36.699219 6.71875 37.164062 6.582031 37.488281 6.308594 C 37.804688 6.03125 37.96875 5.644531 37.96875 5.15625 C 37.96875 4.664062 37.804688 4.292969 37.488281 4.042969 C 37.171875 3.792969 36.699219 3.667969 36.082031 3.667969 L 33.5 3.667969 Z M 33.5 10.929688 L 36.207031 10.929688 C 36.824219 10.929688 37.296875 10.769531 37.636719 10.445312 C 37.972656 10.121094 38.140625 9.707031 38.140625 9.199219 C 38.140625 8.6875 37.972656 8.277344 37.636719 7.949219 C 37.300781 7.632812 36.824219 7.46875 36.207031 7.46875 L 33.5 7.46875 Z M 33.5 10.929688 "/>
     <path  d="M 43.820312 11.8125 C 43.128906 11.8125 42.542969 11.6875 42.058594 11.445312 C 41.570312 11.199219 41.203125 10.820312 40.949219 10.304688 C 40.695312 9.792969 40.550781 9.144531 40.527344 8.355469 C 40.519531 7.980469 40.511719 7.632812 40.511719 7.308594 C 40.511719 6.980469 40.519531 6.632812 40.527344 6.257812 C 40.550781 5.480469 40.699219 4.832031 40.972656 4.320312 C 41.246094 3.808594 41.628906 3.425781 42.113281 3.175781 C 42.597656 2.925781 43.164062 2.800781 43.820312 2.800781 C 44.464844 2.800781 45.03125 2.925781 45.523438 3.175781 C 46.015625 3.425781 46.394531 3.808594 46.667969 4.320312 C 46.949219 4.832031 47.09375 5.476562 47.109375 6.257812 C 47.128906 6.632812 47.136719 6.980469 47.136719 7.308594 C 47.136719 7.632812 47.128906 7.980469 47.109375 8.355469 C 47.09375 9.144531 46.957031 9.792969 46.695312 10.304688 C 46.433594 10.820312 46.058594 11.199219 45.578125 11.445312 C 45.101562 11.6875 44.507812 11.8125 43.820312 11.8125 Z M 43.820312 11.054688 C 44.535156 11.054688 45.125 10.835938 45.585938 10.40625 C 46.046875 9.976562 46.296875 9.269531 46.328125 8.289062 C 46.34375 7.914062 46.351562 7.582031 46.351562 7.300781 C 46.351562 7.019531 46.34375 6.6875 46.328125 6.3125 C 46.308594 5.664062 46.191406 5.132812 45.972656 4.71875 C 45.753906 4.3125 45.457031 4.011719 45.089844 3.824219 C 44.722656 3.636719 44.296875 3.542969 43.820312 3.542969 C 43.351562 3.542969 42.933594 3.636719 42.5625 3.824219 C 42.1875 4.011719 41.894531 4.3125 41.675781 4.71875 C 41.460938 5.132812 41.335938 5.65625 41.308594 6.3125 C 41.304688 6.6875 41.296875 7.019531 41.296875 7.300781 C 41.296875 7.582031 41.304688 7.914062 41.308594 8.289062 C 41.339844 9.261719 41.589844 9.96875 42.058594 10.40625 C 42.523438 10.84375 43.113281 11.054688 43.820312 11.054688 Z M 43.820312 11.054688 "/>
     <path  d="M 52.085938 11.8125 C 51.394531 11.8125 50.808594 11.6875 50.324219 11.445312 C 49.835938 11.199219 49.46875 10.820312 49.214844 10.304688 C 48.960938 9.792969 48.816406 9.144531 48.792969 8.355469 C 48.785156 7.980469 48.777344 7.632812 48.777344 7.308594 C 48.777344 6.980469 48.785156 6.632812 48.792969 6.257812 C 48.816406 5.480469 48.964844 4.832031 49.238281 4.320312 C 49.511719 3.808594 49.894531 3.425781 50.378906 3.175781 C 50.863281 2.925781 51.429688 2.800781 52.085938 2.800781 C 52.738281 2.800781 53.304688 2.925781 53.789062 3.175781 C 54.273438 3.425781 54.660156 3.808594 54.933594 4.320312 C 55.214844 4.832031 55.359375 5.476562 55.375 6.257812 C 55.394531 6.632812 55.402344 6.980469 55.402344 7.308594 C 55.402344 7.632812 55.394531 7.980469 55.375 8.355469 C 55.359375 9.144531 55.222656 9.792969 54.960938 10.304688 C 54.699219 10.820312 54.324219 11.199219 53.84375 11.445312 C 53.359375 11.6875 52.773438 11.8125 52.085938 11.8125 Z M 52.085938 11.054688 C 52.800781 11.054688 53.390625 10.835938 53.851562 10.40625 C 54.3125 9.976562 54.5625 9.269531 54.59375 8.289062 C 54.609375 7.914062 54.617188 7.582031 54.617188 7.300781 C 54.617188 7.019531 54.609375 6.6875 54.59375 6.3125 C 54.574219 5.664062 54.457031 5.132812 54.238281 4.71875 C 54.019531 4.3125 53.722656 4.011719 53.355469 3.824219 C 52.980469 3.636719 52.5625 3.542969 52.085938 3.542969 C 51.617188 3.542969 51.199219 3.636719 50.828125 3.824219 C 50.460938 4.011719 50.160156 4.3125 49.941406 4.71875 C 49.726562 5.132812 49.601562 5.65625 49.574219 6.3125 C 49.570312 6.6875 49.5625 7.019531 49.5625 7.300781 C 49.5625 7.582031 49.570312 7.914062 49.574219 8.289062 C 49.605469 9.261719 49.855469 9.96875 50.324219 10.40625 C 50.789062 10.84375 51.375 11.054688 52.085938 11.054688 Z M 52.085938 11.054688 "/>
     <path  d="M 57.660156 11.6875 C 57.582031 11.6875 57.511719 11.664062 57.460938 11.613281 C 57.410156 11.5625 57.386719 11.492188 57.386719 11.414062 L 57.386719 3.199219 C 57.386719 3.105469 57.410156 3.039062 57.460938 2.988281 C 57.511719 2.9375 57.582031 2.914062 57.660156 2.914062 L 57.886719 2.914062 C 57.976562 2.914062 58.046875 2.9375 58.097656 2.988281 C 58.148438 3.039062 58.171875 3.105469 58.171875 3.199219 L 58.171875 6.457031 L 61.957031 3.101562 C 61.988281 3.074219 62.042969 3.039062 62.117188 2.988281 C 62.191406 2.9375 62.296875 2.914062 62.429688 2.914062 L 62.628906 2.914062 C 62.695312 2.914062 62.753906 2.9375 62.800781 2.988281 C 62.851562 3.039062 62.875 3.09375 62.875 3.164062 C 62.875 3.230469 62.859375 3.28125 62.816406 3.324219 L 58.582031 7.113281 L 63.074219 11.261719 C 63.125 11.3125 63.152344 11.367188 63.152344 11.4375 C 63.152344 11.507812 63.125 11.5625 63.074219 11.613281 C 63.027344 11.664062 62.96875 11.6875 62.902344 11.6875 L 62.691406 11.6875 C 62.558594 11.6875 62.453125 11.664062 62.378906 11.613281 C 62.304688 11.5625 62.25 11.523438 62.21875 11.5 L 58.171875 7.789062 L 58.171875 11.414062 C 58.171875 11.492188 58.148438 11.5625 58.097656 11.613281 C 58.046875 11.664062 57.976562 11.6875 57.886719 11.6875 Z M 57.660156 11.6875 "/>
     <path  d="M 64.835938 11.6875 C 64.757812 11.6875 64.6875 11.664062 64.636719 11.613281 C 64.589844 11.5625 64.5625 11.492188 64.5625 11.414062 L 64.5625 3.1875 C 64.5625 3.105469 64.589844 3.039062 64.636719 2.988281 C 64.6875 2.9375 64.757812 2.914062 64.835938 2.914062 L 65.074219 2.914062 C 65.15625 2.914062 65.222656 2.9375 65.273438 2.988281 C 65.324219 3.039062 65.347656 3.105469 65.347656 3.1875 L 65.347656 10.929688 L 69.65625 10.929688 C 69.75 10.929688 69.816406 10.957031 69.867188 11.007812 C 69.917969 11.054688 69.941406 11.125 69.941406 11.21875 L 69.941406 11.40625 C 69.941406 11.488281 69.917969 11.554688 69.867188 11.605469 C 69.816406 11.65625 69.75 11.679688 69.65625 11.679688 L 64.835938 11.679688 Z M 64.835938 11.6875 "/>
     <path  d="M 71.679688 11.6875 C 71.597656 11.6875 71.527344 11.664062 71.480469 11.613281 C 71.429688 11.5625 71.402344 11.492188 71.402344 11.414062 L 71.402344 3.199219 C 71.402344 3.105469 71.429688 3.039062 71.480469 2.988281 C 71.527344 2.9375 71.597656 2.914062 71.679688 2.914062 L 76.546875 2.914062 C 76.636719 2.914062 76.707031 2.9375 76.757812 2.988281 C 76.808594 3.039062 76.832031 3.105469 76.832031 3.199219 L 76.832031 3.386719 C 76.832031 3.46875 76.808594 3.539062 76.757812 3.589844 C 76.707031 3.636719 76.636719 3.664062 76.546875 3.664062 L 72.1875 3.664062 L 72.1875 6.855469 L 76.269531 6.855469 C 76.363281 6.855469 76.433594 6.882812 76.484375 6.933594 C 76.53125 6.980469 76.558594 7.050781 76.558594 7.144531 L 76.558594 7.332031 C 76.558594 7.414062 76.53125 7.480469 76.484375 7.53125 C 76.433594 7.582031 76.363281 7.605469 76.269531 7.605469 L 72.1875 7.605469 L 72.1875 10.925781 L 76.644531 10.925781 C 76.738281 10.925781 76.808594 10.949219 76.855469 11 C 76.90625 11.050781 76.929688 11.117188 76.929688 11.210938 L 76.929688 11.398438 C 76.929688 11.480469 76.90625 11.550781 76.855469 11.601562 C 76.808594 11.648438 76.738281 11.675781 76.644531 11.675781 L 71.679688 11.675781 Z M 71.679688 11.6875 "/>
     <path  d="M 80.976562 11.6875 C 80.894531 11.6875 80.828125 11.664062 80.777344 11.613281 C 80.726562 11.5625 80.703125 11.492188 80.703125 11.414062 L 80.703125 3.664062 L 78.230469 3.664062 C 78.152344 3.664062 78.082031 3.636719 78.03125 3.589844 C 77.984375 3.539062 77.957031 3.46875 77.957031 3.386719 L 77.957031 3.199219 C 77.957031 3.105469 77.984375 3.039062 78.03125 2.988281 C 78.082031 2.9375 78.152344 2.914062 78.230469 2.914062 L 83.945312 2.914062 C 84.039062 2.914062 84.109375 2.9375 84.15625 2.988281 C 84.207031 3.039062 84.230469 3.105469 84.230469 3.199219 L 84.230469 3.386719 C 84.230469 3.46875 84.207031 3.539062 84.15625 3.589844 C 84.109375 3.636719 84.039062 3.664062 83.945312 3.664062 L 81.488281 3.664062 L 81.488281 11.40625 C 81.488281 11.488281 81.460938 11.554688 81.414062 11.605469 C 81.363281 11.65625 81.292969 11.679688 81.199219 11.679688 L 80.976562 11.679688 Z M 80.976562 11.6875 "/>
     </svg>
       );
};

export default Logo;
