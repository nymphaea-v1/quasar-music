<template>
  <q-card class="col q-pa-md">
    <q-item-section>
      <q-item-label class="q-ml-xs q-pb-xs text-body1">
        <h5 class="q-ma-none q-mb-sm text-primary">
          <slot name="heading" />
        </h5>
      </q-item-label>
    </q-item-section>

    <q-item-section class="q-mb-md">
      <slot />
    </q-item-section>

    <q-item-section>
      <q-item-label caption>
        <slot name="label" />
      </q-item-label>
    </q-item-section>
  </q-card>
</template>
