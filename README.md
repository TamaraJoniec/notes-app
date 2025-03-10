# Notes App

A modern, Apple-inspired notes application built with React that allows users to create, edit, and manage notes with a clean and intuitive interface. The app features offline persistence through localStorage and a responsive design that works across all device sizes.

<img alt="Notes App Demo" src="src/assets/demo.gif" />

## 🚀 Features

- **CRUD Operations**
  - Create new notes
  - Read and view notes in a grid layout
  - Update existing notes
  - Delete notes with confirmation
- **Search Functionality**

  - Real-time search through notes
  - Search by title or content
  - Clear visual feedback for search results

- **Responsive Design**

  - Apple-inspired minimal design
  - Works on mobile, tablet, and desktop
  - Optimized touch targets for mobile
  - Adaptive layout for different screen sizes

- **Accessibility**

  - WCAG compliant
  - Screen reader friendly
  - Keyboard navigation support
  - High contrast support

- **Data Persistence**
  - Notes saved in localStorage
  - Persists after page refresh
  - No backend required

## 🛠️ Technologies Used

- **React 18**

  - Functional components
  - React Hooks (useState, useEffect)
  - Custom hooks for localStorage
  - React Router for navigation

- **Modern CSS**

  - SCSS for styling
  - CSS Grid and Flexbox
  - CSS Variables
  - Responsive design principles

- **State Management**
  - Local state with useState
  - Complex state with useReducer
  - localStorage for persistence

## 🎯 Usage

1. **Creating a Note**

   - Click "Create New Note" button
   - Enter title and content
   - Note is automatically saved

2. **Editing a Note**

   - Click on any note to edit
   - Modify content as needed
   - Changes are saved automatically

3. **Deleting a Note**

   - Click the delete button on any note
   - Confirm deletion
   - Note is permanently removed

4. **Searching Notes**
   - Use the search bar at the top
   - Results update in real-time
   - Search through titles and content

## 🎨 Design Decisions

- **Apple-Inspired UI**: Clean, minimal interface with focus on content
- **Responsive Grid**: Adapts to screen size while maintaining readability
- **Accessibility First**: Built with WCAG guidelines in mind
- **Performance**: Efficient state updates and localStorage management

## 🔄 State Management

- **Local State**: Used for UI components and form handling
- **localStorage**: Persists notes between sessions
- **Custom Hooks**: Abstracts localStorage logic for reusability

## 🌟 Future Enhancements

- [ ] Add categories/tags for notes
- [ ] Implement note sharing
- [ ] Add rich text editing
- [ ] Include image support
- [ ] Add dark mode support
- [ ] Implement cloud sync

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
