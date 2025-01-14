import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import './navbarfix.css';

hydrateRoot(
    document,
    <StrictMode>
        <HydratedRouter />
    </StrictMode>
);
