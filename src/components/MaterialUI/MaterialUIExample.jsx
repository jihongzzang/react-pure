import React from 'react';
import VerticalLinearStepper from './VerticalLinearStepper';
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
import CheckboxLabels from './CheckBoxLabels';
import IconLabelButtons from './IconLableButtons';
import ThemeNesting from './Checkbox';
import FullWidthGrid from './Grid';
import ButtonExample from './ButtonExample';
import VirtualizedList from './VirtualizedList';
import ControlledTreeView from './ControlledTreeView';

export default function MaterialUIExample() {
  return (
    <div>
      <VerticalLinearStepper />
      <SwipeableTemporaryDrawer />
      <CheckboxLabels />
      <IconLabelButtons />
      <ThemeNesting />
      <FullWidthGrid />
      <ButtonExample />
      <VirtualizedList />
      <ControlledTreeView />
    </div>
  );
}
