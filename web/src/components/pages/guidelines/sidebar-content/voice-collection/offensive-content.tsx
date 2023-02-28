import { Localized } from '@fluent/react';
import classNames from 'classnames';
import React from 'react';

import { ChevronDown } from '../../../../ui/icons';
import { SidebarContentProps } from '../voice-sidebar-content';

export const OffensiveContent: React.FC<SidebarContentProps> = ({
  id,
  contentVisible,
  toggleSectionVisible,
}) => {
  return (
    <div className="sidebar-content" id={id}>
      <span className="line" />
      <div className="sidebar-content-header">
        <Localized id="offensive-content">
          <h3 className="guidelines-content-heading" />
        </Localized>
        <ChevronDown
          onClick={toggleSectionVisible}
          className={classNames('chevron', { 'rotate-180': contentVisible })}
        />
      </div>
      {contentVisible && (
        <div className="content-wrapper">
          <Localized
            id="offensive-content-explanation"
            elems={{
              participationGuidelines: (
                <a
                  href="https://www.mozilla.org/en-US/about/governance/policies/participation/"
                  target="_blank"
                  rel="noreferrer"
                />
              ),
              emailFragment: (
                <a
                  href="mailto:commonvoice@mozilla.com"
                  target="_blank"
                  rel="noreferrer"
                />
              ),
            }}>
            <p className="guidelines-content-explanation" />
          </Localized>
          <span className="border" />
        </div>
      )}
    </div>
  );
};
