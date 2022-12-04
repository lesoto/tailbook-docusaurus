.SILENT:
.DEFAULT_GOAL := help

.PHONY: help
help:
	$(info available commands:)
	$(info -> setup                  installs dependencies)
	$(info -> format                 formats source code)
	$(info -> run                    starts application locally)
	$(info -> screenshots            take screenshots)
	$(info -> build                  builds deployable version)

.PHONY: setup
setup:
	yarn install

.PHONY: format
format:
	yarn run format

.PHONY: run
run:
	yarn start

.PHONY: screenshots
publish:
	node screenshots.js

.PHONY: build
build:
	yarn run build
