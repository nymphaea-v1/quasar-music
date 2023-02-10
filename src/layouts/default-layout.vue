<template>
  <q-layout view="hHh lpr fff">
    <q-header
      elevated
      class="bg-blue-grey-9"
    >
      <q-toolbar>
        <q-toolbar-title
          shrink
          class="text-weight-bold no-pointer-events"
        >
          Music Library
        </q-toolbar-title>

        <q-tabs>
          <q-route-tab
            to="/albums"
            label="Albums"
          />
          <q-route-tab
            to="/artists"
            label="Artists"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container class="container">
      <router-view />
      <q-separator class="q-mt-lg q-mb-xl" />
    </q-page-container>

    <q-footer class="bg-blue-grey-10 footer q-pa-md">
      <div>
        created by
        <a
          href="https://github.com/nymphaea-v1"
          class="link cursor-pointer"
          target="_blank"
        >nymphaea-v1</a>
      </div>
    </q-footer>
  </q-layout>
</template>
