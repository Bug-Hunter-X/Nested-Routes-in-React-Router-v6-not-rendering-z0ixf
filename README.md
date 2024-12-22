# React Router v6 Nested Route Rendering Issue

This repository demonstrates a common issue encountered when working with nested routes in React Router v6.  The problem is that nested routes fail to render even when the parent route renders correctly.  This example shows the problem and the solution.

## Problem

The `App.js` file contains a basic React Router v6 setup with nested routes.  Navigating to `/about` renders the About component and its nested route; however, trying to navigate to the nested route `/about/contact` fails to render the Contact component. 

## Solution

The `AppSolution.js` file presents a corrected implementation.  The issue is resolved by ensuring the nested routes are properly defined within the parent route's `element` prop.